import { SERVER_URL } from "./globals";
import { useRef } from "react";
import { shuffle } from "./utils";
// import img1 from "../assets/img1.jpg";
import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import { fakeFetch } from "./fakeServer";

// TODO: Remove fakeFetch after testing
const fetch = fakeFetch;

export function useFeed() {
  // let pinIds: number[] | undefined = undefined;

  // fetch(SERVER_URL + "/pins/search/findAllIds")
  //   .then((res) => res.json())
  //   .then((data: number[]) => {
  //     pinIds = shuffle(data);
  //   })
  //   .catch((err) => {
  //     console.log(err);
  //     throw new Error("No data");
  //   });

  const { data: pinIds } = useQuery({
    queryKey: ["pinIds"],
    queryFn: () =>
      fetch(SERVER_URL + "/pins/search/findAllIds")
        .then((res) => res.json() as Promise<number[]>)
        .then((data) => shuffle(data)),
  });

  // const getPins = (cnt = 1): string[] => {
  //   if (pinIds === undefined) return [];
  //   if (cnt > pinIds.length) {
  //     cnt = pinIds.length;
  //   }
  //   const ids = pinIds.splice(0, cnt);

  //   const pins: string[] = [];
  //   ids.forEach((id) => {
  //     fetch(`${SERVER_URL}/pins/${id}/PinImg/content`)
  //       .then((res) => {
  //         if (!res.ok) throw new Error("No data");
  //         return res.blob();
  //       })
  //       .then((data) => {
  //         pins.push(URL.createObjectURL(data));
  //       })
  //       .catch(() => {
  //         pins.push(img1);
  //       });
  //   });

  //   return pins;
  // };

  const fetchOne = async (id?: number) => {
    if (id === undefined) return undefined;
    const res = await fetch(`${SERVER_URL}/pins/${id}/PinImg/content`);
    if (!res.ok) throw new Error("No data");
    const data = await res.blob();
    return URL.createObjectURL(data);
  };

  return useInfiniteQuery({
    queryKey: ["feed"],
    queryFn: ({ pageParam }) => fetchOne(pageParam),
    initialPageParam: pinIds ? pinIds[0] : undefined,
    getNextPageParam: (_0, _1, lastPageParam) => {
      if (pinIds === undefined) return undefined;
      if (lastPageParam === undefined) return undefined;
      return pinIds[pinIds.indexOf(lastPageParam) + 1];
    },
    enabled: !!pinIds,
    staleTime: Infinity,
  });
}

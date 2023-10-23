import { SERVER_URL } from "./globals";
import { useRef } from "react";
import { shuffle } from "./utils";
// import img1 from "../assets/img1.jpg";
import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import { fakeFetch } from "./fakeServer";

// Uncomment this line to use the fake server
// const fetch = fakeFetch;

export function useFeed(username?: string, type?: "created" | "saved") {
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

  const fetchIdsUrl =
    SERVER_URL +
    (!username
      ? "/pins/search/findAllIds"
      : type === "created"
      ? "/pins/search/findIdsByMemberId?id=" + username
      : "/saves/search/findSavedPinIdsByMemberId?id=" + username);

  const { data: pinIds } = useQuery({
    queryKey: ["pinIds", fetchIdsUrl],
    queryFn: () =>
      fetch(fetchIdsUrl)
        .then((res) => res.json() as Promise<number[]>)
        .then((data) => shuffle(data)),
    staleTime: Infinity,
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
    const pinRes = await fetch(
      `${SERVER_URL}/pins/${id}?projection=pinProjection`,
    );
    if (!pinRes.ok) throw new Error("No data");
    const pinData = (await pinRes.json()) as { image: { imgSeq: number } };
    const imgSeq = pinData.image.imgSeq;
    const res = await fetch(`${SERVER_URL}/upImages/${imgSeq}/content`);
    if (!res.ok) throw new Error("No data");
    const data = await res.blob();
    return URL.createObjectURL(data);
  };

  return useInfiniteQuery({
    queryKey: ["feed", fetchIdsUrl],
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

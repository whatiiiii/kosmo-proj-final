// import testPic from "../assets/react.svg?raw";

export function fakeFetch(url?: string): Promise<Response> {
  if (url === undefined) {
    return Promise.reject(new Error("No url"));
  }
  if (url.includes("findAllIds")) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (Math.random() < 0.01) {
          reject(new Error("Fake Error"));
        } else {
          resolve(
            new Response(
              JSON.stringify(Array.from({ length: 100 }, (_, i) => i + 1)),
            ),
          );
        }
      }, 300);
    });
  }
  // return new Promise((resolve, reject) => {
  //   setTimeout(() => {
  //     if (Math.random() < 0.01) {
  //       reject(new Error("Fake Error"));
  //     } else {
  //       resolve(new Blob([testPic], { type: "image/svg+xml" }));
  //     }
  //   }, 300);
  // });
  if (url.includes("PinImg")) {
    const ids = url.match(/\/pins\/(\d+)\//);
    if (ids === null) {
      return Promise.reject(new Error("No id"));
    }
    const id = ids[1];
    return fetch(
      "https://placehold.co/600x400?" +
        new URLSearchParams({ text: id }).toString(),
    );
  }
  return Promise.reject(new Error("Unknown Error"));
}

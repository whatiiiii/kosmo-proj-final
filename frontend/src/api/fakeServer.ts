import testPic from "../assets/react.svg?raw";

export function fakeFetch() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() < 0.01) {
        reject(new Error("Fake Error"));
      } else {
        resolve(new Blob([testPic], { type: "image/svg+xml" }));
      }
    }, 300);
  });
}

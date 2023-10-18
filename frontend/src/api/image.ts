import { SERVER_URL } from "./globals";
import { UpImage } from "./types";

export async function uploadImage(image: File) {
  const createResponse = await fetch(`${SERVER_URL}/upImages`, {
    method: "POST",
    body: JSON.stringify({}),
    headers: {
      "Content-Type": "application/json",
    },
  });
  const { imgSeq } = (await createResponse.json()) as UpImage;

  const uploadResponse = await fetch(
    `${SERVER_URL}/upImages/${imgSeq}/content`,
    {
      method: "PUT",
      body: image,
      headers: {
        "Content-Type": "image/jpeg",
      },
    },
  );
  if (!uploadResponse.ok) {
    throw new Error("Failed to upload image");
  }

  return imgSeq;
}

export async function getImage(imgSeq: number) {
  const response = await fetch(`${SERVER_URL}/upImages/${imgSeq}/content`);
  if (!response.ok) {
    throw new Error("Failed to get image");
  }

  return response.blob();
}

export async function getImageFromMember(id: string) {
  const infoResponse = await fetch(`${SERVER_URL}/members/${id}/ProfileImg`);
  if (!infoResponse.ok) {
    throw new Error("Failed to get info");
  }
  const { imgSeq } = (await infoResponse.json()) as UpImage;

  return getImage(imgSeq);
}

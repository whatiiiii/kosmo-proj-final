import Avatar, { type AvatarProps } from "@mui/material/Avatar";
import { useServerUser, useUser } from "../api/user";
import { useEffect, useState } from "react";
import { getImage } from "../api/image";

type ProfileAvatarProps = AvatarProps & {
  username?: string;
};

export default function ProfileAvatar({
  username,
  ...props
}: ProfileAvatarProps) {
  const [self] = useUser();
  if (!username) {
    username = self?.id;
  }
  const { data } = useServerUser(username);
  const [imgSrc, setImgSrc] = useState<string>("");
  useEffect(() => {
    if (!data) {
      return;
    }

    if (data.upimage) {
      getImage(data.upimage.imgSeq)
        .then((img) => {
          setImgSrc(URL.createObjectURL(img));
        })
        .catch((err) => {
          console.error(err);
        });
    }
  }, [data]);

  return <Avatar src={imgSrc} {...props} />;
}

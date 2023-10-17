import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { TextField } from "@mui/material";
import { ChangeEvent, useRef, useState } from "react";
//import Button from "@mui/material-next/Button";
import Avatar from "@mui/material/Avatar";
import { useServerUser } from "../api/user";

export default function EditProfilePage() {
  //이미지 초기값 state
  const [imgFile, setimgFile] = useState<string>("");
  const imgRef = useRef<HTMLInputElement>(null);
  const result = useServerUser();
  const data = result.data;
  // const name = data !==null && data ! == undefined ? data.name:"";
  const name = data ? data.name : "";

  const saveImgFile = () => {
    let file: File | null = null;
    if (imgRef.current?.files != null && imgRef.current?.files.length !== 0) {
      file = imgRef.current?.files[0];
    }

    const reader: FileReader = new FileReader();

    if (file) {
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        if (typeof reader.result === "string") {
          setimgFile(reader.result);
        }
      };
    }
  };
  const handleImageClick = () => {
    if (imgRef.current) {
      imgRef.current.click(); // input 클릭 이벤트를 발생시킵니다.
    }
  };
  return (
    <Box sx={{ width: "100%", maxWidth: 500 }}>
      <Typography variant="h4" gutterBottom fontWeight="bold">
        프로필 수정
      </Typography>
      <Typography gutterBottom fontSize={15}>
        개인 정보는 비공개로 유지하세요. 여기에 추가한 정보는 회원님의 프로필을
        볼 수 있는 모든 사람에게 표시됩니다.
      </Typography>
      <br />
      <Typography gutterBottom fontSize={12}>
        사진
      </Typography>
      {!imgFile && (
        <Avatar
          alt="Basic Avatar"
          sx={{ width: 56, height: 56 }}
          src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
          variant="circular"
        />
      )}
      {imgFile && (
        <Avatar
          alt="Basic Avatar"
          src={imgFile}
          sx={{ width: 56, height: 56 }}
          variant="circular"
        />
      )}

      {/* 사진바꾸기 기능  */}
      <input
        type="file"
        style={{ display: "none" }}
        accept="image/jpg, image/png, image/jpeg"
        name="profile_img"
        onChange={saveImgFile}
        ref={imgRef}
      />
      <Button
        sx={{
          marginTop: "15px",
          backgroundColor: "#dbdbdb",
          color: "black",
          marginBottom: "15px",
        }}
        onClick={handleImageClick}
      >
        변경
      </Button>

      <Typography gutterBottom fontSize={12}>
        이름
      </Typography>
      <TextField
        id="outlined-multiline-flexible"
        label="이름"
        multiline
        maxRows={4}
        style={{ width: "47.5%", height: "80px" }}
        value={name}
      />

      <Typography gutterBottom fontSize={12}>
        소개
      </Typography>

      <TextField
        id="outlined-multiline-static"
        placeholder="회원님의 이야기를 들려주세요"
        multiline
        rows={4}
        style={{ width: "95%", height: "150px" }}
      />
      <Typography gutterBottom fontSize={12}>
        웹 페이지
      </Typography>

      <TextField
        id="outlined-basic"
        placeholder="회원님의 사이트로 트래픽을 유도하는 링크를 추가하세요"
        variant="outlined"
        style={{ width: "95%", height: "80px" }}
      />
      <Typography gutterBottom fontSize={12}>
        사용자 이름
      </Typography>
      <TextField
        id="outlined-basic"
        placeholder="다른 사람들이 회원님을 찾을 수 있도록 잘 선택하세요"
        variant="outlined"
        style={{ width: "95%" }}
      />
    </Box>
  );
}

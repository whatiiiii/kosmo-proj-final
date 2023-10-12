import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { TextField } from "@mui/material";
//import Button from "@mui/material-next/Button";

export default function EditProfilePage() {
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
      <Button
        variant="outlined"
        sx={{
          m: 1,
          color: "black",
          borderColor: "gray",
          bgcolor: "background.paper",
          fontWeight: "bold",
        }}
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

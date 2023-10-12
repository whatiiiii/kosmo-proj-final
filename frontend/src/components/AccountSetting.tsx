/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import {
  FormControl,
  FormControlLabel,
  InputLabel,
  MenuItem,
  Radio,
  RadioGroup,
  Select,
  SelectChangeEvent,
  TextField,
} from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import React from "react";

export default function AccountSetting() {
  const [country, setCountry] = React.useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setCountry(event.target.value);
  };

  return (
    <Box sx={{ width: "100%", maxWidth: 500 }}>
      <Typography variant="h4" gutterBottom fontWeight="bold">
        계정 관리
      </Typography>
      <Typography gutterBottom fontSize={15}>
        개인 정보 또는 계정 유형을 변경합니다.
      </Typography>
      <br />
      <Typography variant="h6" gutterBottom fontWeight="bold">
        내 계정
      </Typography>
      <Typography gutterBottom fontSize={12}>
        이메일 · 비공개
      </Typography>
      <TextField
        id="outlined-basic"
        placeholder="이메일을 적어주세요"
        variant="outlined"
        style={{ width: "95%", height: "80px" }}
      />
      <Typography variant="h6" gutterBottom fontWeight="bold">
        개인 정보
      </Typography>

      <Typography gutterBottom fontSize={12}>
        생년월일
      </Typography>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DemoContainer components={["DatePicker"]}>
          <DatePicker label="생년월일" />
        </DemoContainer>
      </LocalizationProvider>

      <FormControl>
        <Typography gutterBottom fontSize={12}>
          성별
        </Typography>
        <RadioGroup
          row
          aria-labelledby="demo-row-radio-buttons-group-label"
          name="row-radio-buttons-group"
        >
          <FormControlLabel value="female" control={<Radio />} label="남성" />
          <FormControlLabel value="male" control={<Radio />} label="여성" />
          <FormControlLabel
            value="other"
            control={<Radio />}
            label="둘다아님"
          />
        </RadioGroup>
      </FormControl>

      <Typography gutterBottom fontSize={12}>
        국가/지역
      </Typography>

      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label"></InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={country}
          label="country"
          onChange={handleChange}
        >
          <MenuItem value={1}>대한민국</MenuItem>
          <MenuItem value={2}>미국</MenuItem>
          <MenuItem value={3}>일본</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}

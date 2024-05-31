import React from "react";
import "../App.css";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import { useMediaQuery } from "@mui/material";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import SendIcon from "@mui/icons-material/Send";

const RecruitSub = () => {
  const isSmallScreen = useMediaQuery("(max-width:750px)");

  return (
    <>
      <div className="ContactSub">
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img
            className="RecruitSubImg"
            src={process.env.PUBLIC_URL + "/img/Recruit.png"}
            alt="サンプル画像"
          />
        </div>

        <p>以下のフォームに必要事項を入力してください。</p>

        <form>
          <TextField
            required
            id="standard-required"
            label="氏名"
            variant="standard"
            style={{ width: isSmallScreen ? "80%" : "40%", marginTop: "20px" }}
          />
          <TextField
            required
            id="standard-required"
            label="氏名（ふりがな）"
            variant="standard"
            style={{ width: isSmallScreen ? "80%" : "40%", marginTop: "20px" }}
          />
          <TextField
            required
            id="standard-required"
            label="TEL"
            variant="standard"
            style={{ width: isSmallScreen ? "80%" : "40%", marginTop: "20px" }}
          />
          <TextField
            required
            id="standard-required"
            label="mail"
            variant="standard"
            style={{ width: isSmallScreen ? "80%" : "40%", marginTop: "20px" }}
          />
          　　　
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
              label="生年月日"
              style={{
                width: isSmallScreen ? "80%" : "40%",
                marginTop: "10px",
              }}
            />
          </LocalizationProvider>
          <FormControl
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              marginTop: "10px",
            }}
          >
            <FormLabel
              id="demo-row-radio-buttons-group-label"
              style={{ marginRight: "20px" }}
            >
              性別
            </FormLabel>

            <RadioGroup
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="row-radio-buttons-group"
              style={{ margintop: "20px", height: "65px" }}
            >
              <FormControlLabel
                value="female"
                control={<Radio />}
                style={{ margintop: "20px", height: "65px" }}
                label="男性"
              />

              <FormControlLabel
                value="male"
                control={<Radio />}
                style={{ margintop: "20px", height: "65px" }}
                label="女性"
              />
              <FormControlLabel
                value="other"
                control={<Radio />}
                style={{ margintop: "20px", height: "65px" }}
                label="未回答"
              />
            </RadioGroup>
          </FormControl>
          <TextField
            id="outlined-multiline-static"
            label="志望動機/希望条件 等"
            multiline
            rows={10}
            variant="outlined"
            style={{ width: isSmallScreen ? "80%" : "40%", marginTop: "20px" }}
          />
          <Stack direction="row" spacing={2}>
            <Button
              variant="contained"
              style={{
                width: "100px",
                height: "50px",
                marginTop: "20px",
                backgroundColor: "#b960fb",
              }}
              endIcon={<SendIcon style={{ margin: "0" }} />}
            >
              送信
            </Button>
          </Stack>
        </form>
      </div>
    </>
  );
};

export default RecruitSub;

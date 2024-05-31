import React from "react";
import "../App.css";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import { useMediaQuery } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";

const ContactSub = () => {
  const isSmallScreen = useMediaQuery("(max-width:750px)");

  return (
    <>
      <svg width="100%" height="1">
        <line x1="15%" y1="0" x2="85%" y2="0" stroke="black" strokeWidth="1" />
      </svg>

      <div className="ContactSub">
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img
            className="ContactSubImg"
            src={process.env.PUBLIC_URL + "/img/Contact.png"}
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

          <TextField
            id="outlined-multiline-static"
            label="お問い合わせ内容"
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

export default ContactSub;

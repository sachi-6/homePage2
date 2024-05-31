import React from "react";
import "../App.css";
import ImageWithAnimation from "./ImageWithAnimation";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import PetsIcon from "@mui/icons-material/Pets";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ContactSub from "./ContactSub";

const Contact = () => {
  const handleImageClick = () => {
    window.location.href = "/ContactSub";
  };

  return (
    <>
      <Router>
        <Routes>
          <Route path="/ContactSub" element={<ContactSub />} />
        </Routes>
      </Router>

      <svg className="svg" width="100%" height="1">
        <line x1="15%" y1="0" x2="85%" y2="0" stroke="black" strokeWidth="1" />
      </svg>

      <div id="Contact" class="anchor"></div>

      <div className="Contact">
        <ImageWithAnimation
          src={process.env.PUBLIC_URL + "/img/Contact.png"}
          alt="サンプル画像"
        />

        <div className="Contact_section">
          <p>
            システム開発案・パートナー企業等は
            <br />
            下記フォームよりお気軽にお問い合わせ下さい
          </p>

          <Stack direction="row" spacing={2}>
            <Button
              variant="contained"
              onClick={handleImageClick}
              style={{
                marginTop: "20px",
                width: "200px",
                backgroundColor: "#ffffff",
                color: "#000000",
                fontWeight: "bold",
                boxShadow: "rgba(0, 0, 0, 0.1) 0px 14px 20px",
                borderRadius: "20px",
                borderColor: "#000000",
                borderWidth: "1px",
                borderStyle: "solid",
              }}
              endIcon={<PetsIcon style={{ color: "#b960fb" }} />}
            >
              お問い合わせ
            </Button>
          </Stack>
        </div>
      </div>
    </>
  );
};

export default Contact;

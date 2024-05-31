import React from "react";
import "../App.css";
import ImageWithAnimation from "./ImageWithAnimation";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import PetsIcon from "@mui/icons-material/Pets";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RecruitSub from "./RecruitSub";

const Recruit = () => {
  const handleImageClick = () => {
    window.location.href = "/RecruitSub";
  };

  return (
    <>
      <Router>
        <Routes>
          <Route path="/RecruitSub" element={<RecruitSub />} />
        </Routes>
      </Router>

      <svg className="svg" width="100%" height="1">
        <line x1="15%" y1="0" x2="85%" y2="0" stroke="black" strokeWidth="1" />
      </svg>

      <div id="Recruit" class="anchor"></div>

      <div className="Recruit">
        <ImageWithAnimation
          src={process.env.PUBLIC_URL + "/img/Recruit.png"}
          alt="サンプル画像"
        />

        <div className="Recruit_section">
          <p>
            私たちと一緒を働きませんか？
            <br />
            採用情報の詳細は下記をご確認ください
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
              採用情報
            </Button>
          </Stack>
        </div>
      </div>
    </>
  );
};

export default Recruit;

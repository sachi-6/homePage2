import React from "react";
import "../App.css";
import ImageWithAnimation from "./ImageWithAnimation";

const Mission = () => {
  return (
    <div className="top">
      <div id="Mission" class="anchor"></div>

      <div className="Mission">
        <ImageWithAnimation
          src={process.env.PUBLIC_URL + "/img/Mission.png"}
          alt="サンプル画像"
        />

        <div className="Mission_section">
          <p className="Mission_title">
            {" "}
            アプリ開発で
            <br />
            Freeな人生を創造する
          </p>

          <p>
            「最先端の技術」と「柔軟な発想」を活用し
            <br />
            アプリ開発を通じて安定性と効率性を実現します
          </p>
        </div>
      </div>
    </div>
  );
};

export default Mission;

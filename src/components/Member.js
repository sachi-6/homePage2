import React from "react";
import "../App.css";
import ImageWithAnimation from "./ImageWithAnimation";

const Member = () => {
  return (
    <>
      <svg className="svg" width="100%" height="1">
        <line x1="15%" y1="0" x2="85%" y2="0" stroke="black" strokeWidth="1" />
      </svg>

      <div id="Member" class="anchor"></div>

      <div className="Member">
        <ImageWithAnimation
          src={process.env.PUBLIC_URL + "/img/Member.png"}
          alt="サンプル画像"
        />

        <div className="Member_section">
          <p>小堀 洋平</p>
          <p className="Member_text">
            大規模システム開発からアジャイル開発、生成AIアプリ開発に携る。
          </p>
          <p className="Member_text">
            多種多様なシステム・開発言語にて活用してきたシステム構築に欠かせないエンジニア・マネジメントスキルを豊富に有する。
          </p>
          <img
            className="photo"
            src={`${process.env.PUBLIC_URL}/img/Member_1.jpg`}
            alt="Member_1"
          />
        </div>
      </div>
    </>
  );
};

export default Member;

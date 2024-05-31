import React from "react";
import "../App.css";
import ImageWithAnimation from "./ImageWithAnimation";

const News = () => {
  return (
    <>
      <svg className="svg" width="100%" height="1">
        <line x1="15%" y1="0" x2="85%" y2="0" stroke="black" strokeWidth="1" />
      </svg>

      <div id="News" class="anchor"></div>

      <div className="News">
        <ImageWithAnimation
          src={process.env.PUBLIC_URL + "/img/News.png"}
          alt="サンプル画像"
        />

        <ul className="News_section">
          <li className="empty">
            {" "}
            ◆ 2024/08/1
            <br /> 創業２年を迎えました！
          </li>
          <li className="empty">
            {" "}
            ◆ 2024/05/20
            <br /> ホームページリニューアルしました
          </li>
          <li className="empty">
            {" "}
            ◆ 2023/08/20
            <br /> 社名設立しました
          </li>
        </ul>
      </div>
    </>
  );
};

export default News;

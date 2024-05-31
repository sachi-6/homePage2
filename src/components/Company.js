import React from "react";
import "../App.css";
import ImageWithAnimation from "./ImageWithAnimation";

const Company = () => {
  return (
    <div>
      <svg className="svg" width="100%" height="1">
        <line x1="15%" y1="0" x2="85%" y2="0" stroke="black" strokeWidth="1" />
      </svg>

      <div id="Company" class="anchor"></div>

      <div className="Company">
        <ImageWithAnimation
          src={process.env.PUBLIC_URL + "/img/About.png"}
          alt="サンプル画像"
        />

        <ul className="Company_section">
          <li className="empty">代 表 | 小堀洋平</li>
          <li className="empty">商 号 | RaynsArchitect合同会社</li>
          <li className="empty">設 立 | 2022年8月1日</li>
          <li className="empty">
            事 業 | 各種システム開発 コンサルティング事業
          </li>
          <li className="empty">所 在 地 | 〒160-0023</li>
          <li className="empty"> 東京都新宿区西新宿3-3-13 西新宿水間ビル2F</li>
          <li className="empty">連 絡 先 | 050-3690-0713</li>
        </ul>
      </div>
    </div>
  );
};

export default Company;

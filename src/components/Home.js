import React, { useState, useEffect } from "react";
import "../App.css";

const Home = () => {
  const images = ["/img/Top1.jpg", "/img/Top2.jpg", "/img/Top3.jpg"];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      // 画像のインデックスを更新して、次の画像を表示
      setCurrentImageIndex(
        (currentIndex) => (currentIndex + 1) % images.length
      );
    }, 700); // 1秒ごとに画像を切り替える

    // コンポーネントがアンマウントされた時に、インターバルをクリアする
    return () => clearInterval(interval);
  }, [images.length]); // images.lengthが変更された時にuseEffectが再実行される

  return (
    <div>
      {/* 現在の画像を表示 */}
      <div id="Home" class="anchor"></div>
      <img
        className="homeImg"
        src={process.env.PUBLIC_URL + images[currentImageIndex]}
        alt={` ${currentImageIndex}`}
      />
    </div>
  );
};

export default Home;

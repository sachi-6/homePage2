import React, { useEffect, useRef, useState } from "react";

const ImageWithAnimation = ({ src, alt }) => {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const [animationStarted, setAnimationStarted] = useState(false);
  const imageRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (!animationStarted) {
            const timer = setTimeout(() => {
              setIsIntersecting(true);
              setAnimationStarted(true);
            }, 1000); // 1秒後にアニメーション開始
            return () => clearTimeout(timer);
          }
        } else {
          setIsIntersecting(false); // 画面外に画像が出た時にアニメーションを停止
          setAnimationStarted(false);
        }
      });
    });

    const currentImageRef = imageRef.current;

    if (currentImageRef) {
      observer.observe(currentImageRef);
    }

    return () => {
      if (currentImageRef) {
        observer.unobserve(currentImageRef);
      }
    };
  }, [animationStarted]);

  return (
    <img
      ref={imageRef}
      className={`Section_img ${isIntersecting ? "show" : ""}`}
      src={src}
      alt={alt}
    />
  );
};

export default ImageWithAnimation;

import React, { useEffect, useState, useRef, useLayoutEffect, useCallback } from "react";
import "./CarouselMain.scss";
import mainTouaregImage from "../../assets/images/main-touareg.jpg";
import mainTiguanImage from "../../assets/images/main-tiguan.jpg";
import mainArteonImage from "../../assets/images/main-arteon.jpg";
import mainArteonSBImage from "../../assets/images/main-arteon-sb.jpg";
import mainTrocImage from "../../assets/images/main-troc.jpeg";

const images = [
  mainTouaregImage,
  mainTiguanImage,
  mainArteonImage,
  mainArteonSBImage,
  mainTrocImage,
];

export const CarouselMain = () => {
  const firstImageIndex = 0;
  const lastImageIndex = images.length - 1;

  const [currentImageIndex, setCurrentImageIndex] = useState(firstImageIndex);
  const [sliderWidth, setSliderWidth] = useState(0);
  const banner = useRef(null);
  const transformValue = sliderWidth * currentImageIndex;

  useLayoutEffect(() => {
    if (banner.current) {
      setSliderWidth(banner.current.offsetWidth);
    }
  }, [currentImageIndex]);

  const handleLeftSlide = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === firstImageIndex ? lastImageIndex : prevIndex - 1
    );
  };

  const handleRightSlide = useCallback(() => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === lastImageIndex ? firstImageIndex : prevIndex + 1
    );
  }, [lastImageIndex]);

  useEffect(() => {
    const timerId = setInterval(() => {
      handleRightSlide();
    }, 5000);

    return () => clearInterval(timerId);
  }, [currentImageIndex, handleRightSlide]);

  return (
    <section className="Carousel">
      <div className="Carousel__slider">
        <div className="Carousel__slider-container" ref={banner}>
          <button
            type="button"
            className="Carousel__slider-button Carousel__slider-button--left"
            onClick={handleLeftSlide}
          >
            <div className="icon icon--left" />
          </button>
          <ul
            className="Carousel__slider-list"
            style={{
              transform: `translateX(${-transformValue}px)`,
            }}
          >
            {images.map((image) => (
              <li key={image} className="Carousel__slider-item">
                <img
                  src={image}
                  alt="Banner"
                  className="Carousel__slider-image"
                />
              </li>
            ))}
          </ul>
          <button
            type="button"
            className="Carousel__slider-button Carousel__slider-button--right"
            onClick={handleRightSlide}
          >
            <div className="icon icon--right" />
          </button>
        </div>
      </div>

      <div className="Carousel__position">
        {images.map((image, i) => (
          <button
            type="button"
            key={image}
            className="Carousel__position-item"
            onClick={() => setCurrentImageIndex(i)}
          />
        ))}
      </div>
    </section>
  );
};

import React from "react";
import { IoIosRadioButtonOn } from "react-icons/io";
import { SlideDots } from "@/app/./SlideDots";
import "./SlideContainer.scss";

export default function SlideContainer({ images, index, setIndex }) {
  return (
    <div className="slide-container">
      {images &&
        images.map((img, i) => (
          <div
            key={i}
            className={`slide-wrapper ${index === i ? "active" : ""}`}
          >
            <img
              src={img}
              alt={`슬라이드-${i}`}
              className="slide-image"
            />
          </div>
        ))}

      <SlideDots
        count={images.length}
        activeIndex={index}
        setIndex={setIndex}
        icon={<IoIosRadioButtonOn />}
      />
    </div>
  );
}

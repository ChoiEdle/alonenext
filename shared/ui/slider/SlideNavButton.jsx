import React from "react";
import "./SlideNavButton.scss";

export default function SlideNavButton({ position, onClick, icon }) {
  return (
    <span
      className={`slide-button ${position}`}
      onClick={onClick}
    >
      {icon}
    </span>
  );
}
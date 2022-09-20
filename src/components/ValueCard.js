import React from "react";

const ValueCard = ({ image, text, headText }) => {
  return (
    <div className="card__container">
      <div className="card__image">
        <img
          src={image}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            borderRadius: "24px",
          }}
          loading="lazy"
        />
      </div>
      <div className="card__text">
        <p className="card__text-head">{headText}</p>
        <p className="card__text-content">{text}</p>
      </div>
    </div>
  );
};

export default ValueCard;

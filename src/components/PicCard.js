import React from "react";

const PicCard = ({ image }) => {
  return (
    <img
      src={image}
      style={{
        width: "100%",
        height: "100%",
        objectFit: "cover",
        borderRadius: "24px",
      }}
    />
  );
};

export default PicCard;

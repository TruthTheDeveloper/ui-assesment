import React from "react";

const InfoGraphic = () => {
  return (
    <section id="infographic">
      <div className="infographic__container">
        <div className="infograhic__header">
          <p className="infograhic__header-text-1">Our numbers</p>
          <p className="infograhic__header-text-2">
            HandShake Infographic mass market <br /> crowdfunding iteration
          </p>
        </div>
        <div className="infographic__content">
          <div>
            <p className="infographic__content-text">120m</p>
            <p className="infographic__content-text-2">Cool feature title</p>
          </div>
          <div>
            <p className="infographic__content-text">10.000</p>
            <p className="infographic__content-text-2">Cool feature title</p>
          </div>
          <div>
            <p className="infographic__content-text">240</p>
            <p className="infographic__content-text-2">Cool feature title</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InfoGraphic;

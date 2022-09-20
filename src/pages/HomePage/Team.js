import React from "react";
import PicCard from "../../components/PicCard";
import Image1 from "../../images/image1.svg";
import Image2 from "../../images/image2.svg";
import Image3 from "../../images/image.svg";

const Team = () => {
  return (
    <section id="team">
      <div className="team__container">
        <p className="team__title">Our Team</p>
        <p className="team__container-header">The leaderShip team</p>
        <p className="team__container-content">
          Conversion angel investor entrepreneur first mover advantage.
          Handshake infographic mass market crowdfunding iteration. Traction
          stock user experience deployment beta innovator incubator focus.{" "}
        </p>
      </div>

      <div className="team__picture-wrapper">
        <div className="team__picture">
          <PicCard image={Image3} />
          <div className="team__picture-title">
            <p className="team__name">Michael Scott</p>
            <p className="team__title">General Manager</p>
          </div>
        </div>
        <div className="team__picture">
          <PicCard image={Image1} />
          <div className="team__picture-title">
            <p className="team__name">Dwight Schrute</p>
            <p className="team__title">General Manager</p>
          </div>
        </div>
        <div className="team__picture">
          <PicCard image={Image2} />
          <div className="team__picture-title">
            <p className="team__name">Pam Beetsley</p>
            <p className="team__title">General Manager</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;

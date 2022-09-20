import React from "react";
import PicCard from "../../components/PicCard";


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
          <PicCard image={'https://firebasestorage.googleapis.com/v0/b/naruto-208e5.appspot.com/o/picture.svg?alt=media&token=13eb245e-4103-4e7c-afbc-3265394429db'} />
          <div className="team__picture-title">
            <p className="team__name">Michael Scott</p>
            <p className="team__title">General Manager</p>
          </div>
        </div>
        <div className="team__picture">
          <PicCard image={'https://firebasestorage.googleapis.com/v0/b/naruto-208e5.appspot.com/o/picture1.svg?alt=media&token=55cb2e76-a2f0-4ba6-b49f-8d3306083d9a'} />
          <div className="team__picture-title">
            <p className="team__name">Dwight Schrute</p>
            <p className="team__title">General Manager</p>
          </div>
        </div>
        <div className="team__picture">
          <PicCard image={'https://firebasestorage.googleapis.com/v0/b/naruto-208e5.appspot.com/o/picture2.svg?alt=media&token=538dc3bb-9f95-4bd6-9281-89986e4054ab'} />
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

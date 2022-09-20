import React from "react";

import ValueCard from "../../components/ValueCard";


const Values = () => {
  const HeadText1 = "We are commited.";
  const TEXT =
    "Conversion angel investor entrepreneur first mover advantage. Handshake infographic mass market crowdfunding iteration. ";
  const HeadText2 = "We are responsible.";
  const HeadText3 = "We aim for progress.";

  return (
    <section id="values" className="value__container">
      <div className="value__wrapper">
        <p className="value__title">Our Values</p>
        <p className="value__container-header">Things in We believe</p>
        <p className="value__container-content">
          Conversion angel investor entrepreneur first mover advantage.
          Handshake infographic mass market crowdfunding iteration. Traction
          stock user experience deployment beta innovator incubator focus.{" "}
        </p>
      </div>

      <ValueCard image={'https://firebasestorage.googleapis.com/v0/b/naruto-208e5.appspot.com/o/Rectangle3.svg?alt=media&token=910e625d-425c-4d61-aeca-541efe95fe20'} text={TEXT} headText={HeadText1} />
      <ValueCard image={'https://firebasestorage.googleapis.com/v0/b/naruto-208e5.appspot.com/o/Rectangle4.svg?alt=media&token=9855105a-9f7a-4ad3-917b-e0ea2ee0767b'} text={TEXT} headText={HeadText2} />
      <ValueCard image={'https://firebasestorage.googleapis.com/v0/b/naruto-208e5.appspot.com/o/picture5.svg?alt=media&token=2354aef9-7a01-475a-8aca-e50b8fdaad00'} text={TEXT} headText={HeadText3} />
    </section>
  );
};

export default Values;

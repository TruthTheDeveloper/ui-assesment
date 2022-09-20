import React from "react";

//Images
import ValueCard from "../../components/ValueCard";
import Rectangle1 from "../../../assets/Rectangle3.svg";
import Rectangle2 from "../../../assets/Rectangle4.svg";
import Rectangle3 from "../../../assets/picture5.svg";

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

      <ValueCard image={Rectangle1} text={TEXT} headText={HeadText1} />
      <ValueCard image={Rectangle2} text={TEXT} headText={HeadText2} />
      <ValueCard image={Rectangle3} text={TEXT} headText={HeadText3} />
    </section>
  );
};

export default Values;

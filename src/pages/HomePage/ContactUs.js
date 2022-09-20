import React from "react";

const ContactUs = () => {

    const style = {width:'100%', height:'100%', outline:'none', borderRadius: '240px', outline: '0px solid transparent', outlineOffset: '2px', borderColor:'white', outlineColor:"white", paddingLeft:'1rem', border:"none"}

    return(
        <section id="contact__us" className="contact__us-container">
            <div className="contact__us-wrapper">
                <p>An enterprise template to ramp</p>
                <p>up your company website</p>
            </div>
            <div className="contact__wrapper-input">
                <div className="contact__wrapper-input-email">
                    <input placeholder="Your email address" style={style}/>
                </div>
                <button className="contact__wrapper-input-button">start now</button>
            </div>
        </section>
    )
}

export default ContactUs
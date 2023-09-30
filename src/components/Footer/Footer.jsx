import React from "react";
import "./Footer.css";

import tw from "../../assets/tw.svg";
import insta from "../../assets/insta.svg";
import fb from "../../assets/fb.svg";
import fi from "../../assets/hero2.jpg";

const Footer = () => {
  return (
    <div className="footer-comp">
      <div className="footer-sub-comp">
        <div className="img-icons-comp">
          <img className="footer-image" src={fi} width={300} height={300} />
          <img className="footer-image" src={fi} width={300} height={300} />
        </div>
        <div className="nav-objects">
          <h4 className="objects-title">Useful Links</h4>
          <p className="objects">About</p>
          <p className="objects">Product</p>
          <p className="objects">Project</p>
          <p className="objects">Services</p>
        </div>
        <div className="contact-form">
          <label htmlFor="" className="form-title">
            Reach Us
          </label>
          <input
            type="text"
            className="input-box"
            placeholder="Enter your email address"
          />
          <button className="Subscribe">Subscribe Here</button>
        </div>
      </div>
      <div className="Follow">
        <h4 className="Follow-title">Follow Us</h4>
        <div className="social-icons">
          <img className="icons" src={insta} width={35} />
          <img className="icons" src={tw} width={35} />
          <img className="icons" src={fb} width={35} />
        </div>
      </div>
      <hr />
      <div className="Copyright-div">
        <p className="btm-line">
          Copyright {"©"} 2023. All Rights Reserved IntelliDesign{" "}
        </p>
      </div>
    </div>
  );
};

export default Footer;

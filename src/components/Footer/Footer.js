import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footerWrapper">
        <div className="footerImg">
          <img src={process.env.PUBLIC_URL + "/Assets/logo.png"} alt="" />
        </div>
        <div className="year">&copy; 2022</div>
        <div className="socialIcons">
          <img src={process.env.PUBLIC_URL + "/Assets/fb.png"} alt="facebook" />
          <img
            src={process.env.PUBLIC_URL + "/Assets/instagram.png"}
            alt="instagram"
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;

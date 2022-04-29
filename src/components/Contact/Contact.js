import React from "react";
import "./Contact.css";

function Contact() {
  return (
    <div id="contact">
      <div className="contactHeader"> Contact Us</div>
      <div className="contactWrapper">
        <div className="map">
          <img
            src={process.env.PUBLIC_URL + "/Assets/MapsicleMap.png"}
            alt=""
          />
        </div>
        <div className="contactInfo">
          <h3>Location: Downtown Fresno</h3>
          <h3>Business Hours</h3>
          <p>Mon - Fri 10:00 AM - 5:00 PM</p>
          <p>Saturday 10:00 AM - 2:00 PM</p>
          <p>Sunday CLOSED</p>

          <h3>Contact Us</h3>
          <p>Phone: 559-260-4503</p>
          <p>Email: Chunkopop@gmail.com</p>
        </div>
        <div className="contactImage">
          {" "}
          <img
            src={process.env.PUBLIC_URL + "/Assets/contactImageRight.png"}
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default Contact;

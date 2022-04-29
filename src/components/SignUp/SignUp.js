import React from "react";
import "./SignUp.css";

function SignUp() {
  return (
    <div id="signup">
      <div className="signUpHeader">Sign Up For Our Newsletter</div>
      <div className="signUpImg">
        <img src={process.env.PUBLIC_URL + "/Assets/signup.jpg"} alt="" />
      </div>
      <div className="signUpTxt">
        <p>Never miss out on a chance to win a live auction.</p>
        <div className="subscribe">
          <form>
            <input placeholder="Enter Your Email" required />
            <button type="submit">Subscribe</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignUp;

import "./App1.css";
import { useState } from "react";
import profile from "../images/a.png";
import email from "../images/email.jpg";
import pass from "../images/pass.png";

const LoginPg = () => {
  const [form, setform] = useState({
    email: "",
    password: "",
  });

  const onInput = (e) => {
    const state = {
      ...form, [e.target.name]: e.target.value,
    };
    setform(state);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    alert("Form submitted");
  };
  return (
    <div className="main">
      <div className="sub-main">
        <div>
          <div className="imgs">
            <div className="container-image">
              <img src={profile} alt="profile" className="profile" />
            </div>
          </div>
          <div>
            <h1>Login Page</h1>
            <div>
              <img src={email} alt="email" className="email" />
              <input type="text" placeholder="Enter ur email" className="name" onChange={onInput} />
            </div>
            <div className="second-input">
              <img src={pass} alt="pass" className="email" />
              <input type="password" placeholder="Enter ur password" className="name" onChange={onInput} />
            </div>
            <div className="login-button">
              <button type="submit" onClick={onSubmit}>Login</button>
            </div>
            <p className="link">
              <a href="index">Forgot password ?</a> Or <a href="index">Sign Up</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPg;

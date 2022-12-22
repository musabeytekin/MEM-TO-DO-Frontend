import React from "react";
import "./index.css";
import NavbarBrand from "../../components/NavbarBrand/index";
import loginRightSvg from "../../Images/login-right.svg";
import LoginForm from "../../components/LoginForm/index";
import { useEffect } from "react";

const Index = () => {
  useEffect(() => {
    document.title = "MEM | Login";
  }, []);

  return (
    <div className="login-page d-flex justify-content-between">
      <div className="login-page-left p-3">
        <div>
          <NavbarBrand />
          <LoginForm />
        </div>
      </div>
      <div className="login-page-right">
        <img src={loginRightSvg} alt="" className="login-right-img" />
      </div>
    </div>
  );
};

export default Index;

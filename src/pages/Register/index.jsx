import React from "react";
import "./index.css";
import NavbarBrand from "../../components/NavbarBrand/index";
import loginRightSvg from "../../Images/login-right.svg";
import RegisterForm from "../../components/RegisterForm/index";

const Index = () => {
  return (
    <div className="register-page d-flex justify-content-between">
      <div className="register-page-left p-3">
        <div>
          <NavbarBrand />
          <div className="register-form form-card">
            <RegisterForm />
          </div>
        </div>
      </div>
      <div className="register-page-right">
        <img src={loginRightSvg} alt="" className="register-right-img" />
      </div>
    </div>
  );
};

export default Index;

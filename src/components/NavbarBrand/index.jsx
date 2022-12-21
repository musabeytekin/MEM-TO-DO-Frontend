import React from "react";
import logo from "../../Images/logo.svg";
import "./index.css";
const Index = () => {
  return (
    <div className="navbar-brand p-2 ps-4 d-flex align-items-center gap-2">
      <img src={logo} alt="" width={40} height={40} />
      <span className='navbar-brand-text'>MEM</span>
    </div>
  );
};

export default Index;

import React, {useState} from "react";
import { Formik, Field, Form, ErrorMessage} from "formik";
import "./index.css";
import loginImg from "../../Images/Checklist.jpg";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <Formik
      initialValues={{
        password: "",
        username: ""
      }}
      validate={(values) => {
        const errors = {};

        if (!values.password) {
          errors.password = "Password Required";
        }

        if (!values.username) {
          errors.username = "Username Required";
        }

        return errors;
      }}
      onSubmit={(values, { setSubmitting}) => {
        
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      {({ isSubmitting}) => (
        <Form className="login-form form-card-login animate__animated animate__fadeInLeft">
          <img src={loginImg} alt="" className="login-img" />
          <div className="">
            <h1 className="form-title">Sign in to your MEM account</h1>
            <p className="text-muted">
              Organize, streamline and make your tasks smarter!
            </p>
            <div className="row mt-3">
              <div className="form-group col-12">
                <Field
                  type="text"
                  name="username"
                  className="form-control"
                  placeholder={"Username"}
                />
                <ErrorMessage name="username" component="span" className="error-message"/>
              </div>
              <div className="form-group col-12">
                <Field
                  type="password"
                  name="password"
                  className="form-control"
                  placeholder={"Your Password"}
                />
                <ErrorMessage name="password" component="span" className="error-message"/>

              </div>
            </div>
            <div className="form-end d-flex align-items-center justify-content-between">
              <button type="submit" disabled={isSubmitting} className="btn">
                Login
              </button>
              <p className="text-muted form-check">
                Don't have an account? <Link to="/register">Sign Up</Link>
              </p>
            </div>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default Index;

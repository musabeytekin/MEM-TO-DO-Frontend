import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import "./index.css";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <Formik
      initialValues={{
        email: "",
        name: "",
        surname: "",
        password: "",
        passwordConfirm: "",
        username: ""
      }}
      validate={(values) => {
        const errors = {};
        if (!values.email) {
          errors.email = "Email Required";
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
        ) {
          errors.email = "Please provide a valid email address";
        }

        if (!values.name) {
          errors.name = "Name Required";
        }

        if (!values.surname) {
          errors.surname = "Surname Required";
        }
        if (!values.password) {
          errors.password = "Password Required";
        }
        if (!values.passwordConfirm) {
          errors.passwordConfirm = "Password Confirm Required";
          if (values.password !== values.passwordConfirm) {
            errors.passwordConfirm = "Passwords do not match";
          }
        }
        if (!values.username) {
          errors.username = "Username Required";
        }

        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      {({ isSubmitting }) => (
        <Form className="register-form form-card-register animate__animated animate__fadeInLeft">
          <h1 className="form-title">Sign Up for Free</h1>
          <p className="text-muted">
            Organize, streamline and make your tasks smarter!
          </p>
          <div className="row mt-2">
            <div className="form-group col-sm-12 col-md-6">
              <Field
                type="text"
                name="name"
                className="form-control"
                placeholder={"Your Name"}
              />
              <ErrorMessage
                name="name"
                component="span"
                className="error-message"
              />
            </div>
            <div className="form-group col-sm-12 col-md-6">
              <Field
                type="text"
                name="surname"
                className="form-control"
                placeholder={"Your Surname"}
              />
              <ErrorMessage
                name="surname"
                component="span"
                className="error-message"
              />
            </div>
            <div className="form-group col-12">
              <Field
                type="email"
                name="email"
                className="form-control"
                placeholder={"Your Email"}
              />
              <ErrorMessage
                name="email"
                component="span"
                className="error-message"
              />
            </div>
            <div className="form-group col-12">
              <Field
                type="text"
                name="username"
                className="form-control"
                placeholder={"Username"}
              />
              <ErrorMessage
                name="username"
                component="span"
                className="error-message"
              />
            </div>
            <div className="form-group col-12">
              <Field
                type="password"
                name="password"
                className="form-control"
                placeholder={"Your Password"}
              />
              <ErrorMessage
                name="password"
                component="span"
                className="error-message"
              />
            </div>
            <div className="form-group col-12">
              <Field
                type="password"
                name="passwordConfirm"
                className="form-control"
                placeholder={"Confirm Password"}
              />
              <ErrorMessage
                name="passwordConfirm"
                component="span"
                className="error-message"
              />
            </div>
          </div>
          <div className="form-check ps-0">
            <label>
              By signing up, I agree to the MEM To Do{" "}
              <a href="#" target={"_blank"}>
                Privacy Policy
              </a>{" "}
              and{" "}
              <a href="#" target={"_blank"}>
                Terms of Service
              </a>
              .
            </label>
          </div>
          <div className="d-flex align-items-center justify-content-between mt-3 form-end">
            <button type="submit" disabled={isSubmitting} className="btn">
              Sign Up for Free
            </button>
            <p className="text-muted form-check">
              Already have an account? <Link to="/login">Log In</Link>
            </p>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default Index;

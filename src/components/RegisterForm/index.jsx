import React, { useRef } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import "./index.css";

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
        <Form>
          <h1 className="form-title">Sign Up for Free</h1>
          <div className="row mt-5">
            <div className="form-group col-sm-12 col-md-6">
              <Field
                type="text"
                name="name"
                className="form-control"
                placeholder={"Your Name"}
              />
              {/* <ErrorMessage name="name" component="div" /> */}
            </div>
            <div className="form-group col-sm-12 col-md-6">
              <Field
                type="text"
                name="surname"
                className="form-control"
                placeholder={"Your Surname"}
              />
              {/* <ErrorMessage name="surname" component="div" /> */}
            </div>
            <div className="form-group col-12">
              <Field
                type="email"
                name="email"
                className="form-control"
                placeholder={"Your Email"}
              />
              {/* <ErrorMessage name="email" component="div" /> */}
            </div>
            <div className="form-group col-12">
              <Field
                type="text"
                name="username"
                className="form-control"
                placeholder={"Username"}
              />
              {/* <ErrorMessage name="username" component="div" /> */}
            </div>
            <div className="form-group col-12">
              <Field
                type="password"
                name="password"
                className="form-control"
                placeholder={"Your Password"}
              />
              {/* <ErrorMessage name="password" component="div" /> */}
            </div>
            <div className="form-group col-12">
              <Field
                type="password"
                name="passwordConfirm"
                className="form-control"
                placeholder={"Confirm Password"}
              />
              {/* <ErrorMessage name="passwordConfirm" component="div" /> */}
            </div>
          </div>
          <div className="form-check ps-0">
            <label>
            By signing up, I agree to the MEM To Do <a href="#" target={"_blank"}>Privacy Policy</a> and <a href="#" target={"_blank"}>Terms of Service</a>.
            </label>
          </div>
          <button
            type="submit"
            disabled={isSubmitting}
            className="btn"
          >
            Sign Up for Free
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default Index;

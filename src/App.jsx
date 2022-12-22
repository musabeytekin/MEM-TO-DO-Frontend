import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider
} from "react-router-dom";
import './index.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import Layout from "./Layout/index";
import Register from "./pages/Register/index";
import Login from "./pages/Login/index";
import "animate.css"

let router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Layout />}></Route>
      <Route path="register" element={<Register />} />
      <Route path="login" element={<Login/>} />
    </>
  )
);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;

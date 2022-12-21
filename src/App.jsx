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

let router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Layout />}></Route>
      <Route path="register" element={<Register />} />
    </>
  )
);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;

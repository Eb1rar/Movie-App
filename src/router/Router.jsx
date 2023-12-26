import React from "react";
import Navbar from "../components/Navbar";
import Main from "../pages/Main";
import { Route, Routes } from "react-router-dom";

const Router = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Main />} />
      </Routes>
    </>
  );
};

export default Router;

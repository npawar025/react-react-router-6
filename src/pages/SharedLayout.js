import React from "react";
import { Link, Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import StyledNavBar from "../components/StyledNavbar";

const SharedLayout = () => {
  return (
    <>
      <StyledNavBar />
      <Outlet />
    </>
  );
};

export default SharedLayout;

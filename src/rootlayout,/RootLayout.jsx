import React from "react";
import Navbar from "../component/common/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../component/common/Footer";

const RootLayout = () => {
  return (
    <>
      <Navbar />

      <main>
        <Outlet />
      </main>

      <Footer />
    </>
  );
};

export default RootLayout;

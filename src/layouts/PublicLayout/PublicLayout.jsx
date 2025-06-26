import React from "react";
import Header from "../../components/Header/Header.jsx";
import Footer from "../../components/Footer/Footer.jsx";
import { Outlet } from "react-router-dom";

const PublicLayout = () => {
  return (
    <main>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </main>
  );
};

export default PublicLayout;

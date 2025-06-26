import React from "react";
import Header from "../../components/Header/Header.jsx";
import Footer from "../../components/Footer/Footer.jsx";
import { Outlet } from "react-router-dom";
import DemoBanner from "../../components/Banner/DemoBanner/DemoBanner.jsx";

const PublicLayout = () => {
  return (
    <main>
      <Header />
      <main>
        <Outlet />
      </main>
      <DemoBanner />
      <Footer />
    </main>
  );
};

export default PublicLayout;

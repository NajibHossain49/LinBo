import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import ScrollToTop from "../Utilities/ScrollToTop";

const MainLayout = () => {
  return (
    <div>
      <ScrollToTop />
      <header>
        <Header />
      </header>
      <main>
        {/* Render child routes here */}
        <Outlet />
      </main>
      <footer>
        <Footer/>
      </footer>
    </div>
  );
};

export default MainLayout;

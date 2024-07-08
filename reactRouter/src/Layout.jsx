import React from "react";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import { Outlet, useLocation } from "react-router-dom";

function Layout() {
  const location = useLocation();

  // Add the paths where you want to hide the Header and Footer
  const hideHeaderFooter = location.pathname === "/features";

  return (
    <>
      {!hideHeaderFooter && <Header />}
      <Outlet />
      {!hideHeaderFooter && <Footer />}
    </>
  );
}

export default Layout;

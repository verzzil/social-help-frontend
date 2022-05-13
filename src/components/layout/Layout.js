import { Outlet } from "react-router-dom";

import Footer from "../structures/Footer/Footer";
import Header from "../structures/Header/Header";

const Layout = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;

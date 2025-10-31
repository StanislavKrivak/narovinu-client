import Footer from "../Footer/Footer";
import { Outlet } from "react-router-dom";

export function Layout() {
    return (
      <>
        <main>
        <Outlet />
      </main>
      <Footer />
      </>
    );
  }
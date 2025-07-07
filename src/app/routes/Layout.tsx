import Navbar from "@/components/Navbar";
import { Outlet } from "react-router";

function Layout() {
  return (
    <div className="w-full">
      <Navbar />
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default Layout;

import { Outlet } from "react-router-dom";
import { Footer } from "./components/base/Footer";


function HomeLayout() {
    return (
    <div className="subpixel-antialiased">
      <main className="">
        <Outlet />
      </main>
      <Footer />
    </div>
    );
}

export default HomeLayout;
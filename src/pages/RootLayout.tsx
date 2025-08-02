import { Outlet } from "react-router";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Instagram from "@/components/Instagram";
import Newsletter from "@/components/Newsletter";

export default function RootLayout() {
  return (
    <div className="min-h-screen w-full flex flex-col">
      <Navbar />
      <main className="flex-1 w-full">
        <Outlet />
      </main>
      <Instagram />
      <Newsletter />
      <Footer />
    </div>
  );
}

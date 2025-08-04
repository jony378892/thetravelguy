import { BrowserRouter, Route, Routes } from "react-router";
import Home from "./pages/Home";
import Blogs from "./pages/Blogs";
import Gallery from "./pages/Gallery";
import About from "./pages/About";
import Contact from "./pages/Contact";
import RootLayout from "./pages/RootLayout";
import Destinations from "./pages/Destinations";
import Country from "./pages/Country";
import Blog from "./pages/Blog";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<RootLayout />}>
          <Route index path="" element={<Home />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="blog/:slug" element={<Blog />} />
          <Route path="destinations" element={<Destinations />} />
          <Route path="destination/:country" element={<Country />} />

          <Route path="destinations/:country" element={<Country />} />
          <Route path="gallery" element={<Gallery />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

import { BrowserRouter, Route, Routes } from "react-router";
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import Category from "./pages/Category";
import Gallery from "./pages/Gallery";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Destinations from "./pages/Destinations";
import RootLayout from "./components/RootLayout";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<RootLayout />}>
          <Route index path="" element={<Home />} />
          <Route path="blog" element={<Blog />} />
          <Route path="destinations" element={<Destinations />} />
          <Route path="categories" element={<Category />} />
          <Route path="gallery" element={<Gallery />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

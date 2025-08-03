import { NavLink } from "react-router";

export default function NavNavLinks({ className }: { className: string }) {
  return (
    <nav className={className}>
      <NavLink to="/">HOME</NavLink>
      <NavLink to="/blogs">BLOGS</NavLink>
      <NavLink to="/destinations">DESTINATIONS</NavLink>
      <NavLink to="/gallery">GALLERY</NavLink>
      <NavLink to="/about">ABOUT</NavLink>
      <NavLink to="/contact">CONTACT</NavLink>
    </nav>
  );
}

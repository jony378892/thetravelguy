import { Earth, Search, X } from "lucide-react";
import Sidemenu from "./Sidemenu";
import NavLinks from "./NavLinks";
import { useState } from "react";

export default function Navbar() {
  const [search, setSearch] = useState(false);

  function handleSearch() {
    setSearch((search) => !search);
  }

  return (
    <header className="fixed inset-x-0 top-0  z-50 bg-black/75 backdrop-blur-2xl">
      <header className="flex items-center justify-between px-3 py-4 text-white/50 custom-width mx-auto">
        {search ? (
          <div className="relative w-full sm:mx-10 transition-all ">
            <input
              type="text"
              placeholder="Search..."
              className="w-full focus:outline-none "
            />
            <X className="absolute right-0 top-0" onClick={handleSearch} />
          </div>
        ) : (
          <>
            {" "}
            <div className="md:hidden">
              <Sidemenu />
            </div>
            <p className="flex items-center gap-2 font-semibold text-white text-xl">
              <Earth className="size-5" /> The Travel Guy
            </p>
            <NavLinks className="hidden md:flex gap-2 sm:gap-3 lg:gap-5 text-xs lg:text-sm pt-2 text-white/80" />
            <Search className="size-6 cursor-pointer" onClick={handleSearch} />
          </>
        )}
      </header>
    </header>
  );
}

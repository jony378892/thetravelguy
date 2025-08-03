import { Facebook, Instagram, Mail, Twitter, Youtube } from "lucide-react";
import { Link } from "react-router";

export default function Footer() {
  return (
    <footer className="bg-black/95 flex flex-col items-center text-center px-6 text-white/40">
      <div className="flex gap-4 lg:gap-5 items-center py-7">
        <Facebook className="size-4.5" />
        <Instagram className="size-4.5" />
        <Twitter className="size-4.5" />
        <Youtube className="size-4.5" />
        <Mail className="size-4.5" />
      </div>
      <hr className="border-b-0 border-white/20 w-full" />
      <p className="text-sm  py-6">@The Travel Guy 2025</p>
      <ul className="flex items-center not-only:list-disc gap-7 text-xs sm:text-sm text-secondary pb-5">
        <li>
          <Link to="">Affiliate Program</Link>
        </li>
        <li>
          <Link to="">Terms of Use </Link>
        </li>
        <li>
          <Link to="">Privacy Policy</Link>
        </li>
      </ul>
    </footer>
  );
}

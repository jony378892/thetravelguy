import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  Earth,
  Facebook,
  Instagram,
  Mail,
  Menu,
  Twitter,
  Youtube,
} from "lucide-react";
import NavLinks from "./NavLinks";

export default function Sidemenu() {
  return (
    <Sheet>
      <SheetTrigger>
        <Menu />
      </SheetTrigger>
      <SheetContent side="left">
        <SheetHeader className="flex flex-col items-center">
          <SheetTitle className="flex items-center gap-2 font-semibold text-white  bg-black/95 py-1 px-2 w-fit rounded-lg text-base text-center">
            <Earth className="size-5" /> The Travel Guy
          </SheetTitle>
          <p className="text-center w-20 border-b border-secondary pt-5"></p>
          <SheetDescription className="flex gap-4 lg:gap-5 items-center py-5 ">
            {" "}
            <Facebook className="size-4.5 text-black/70" />
            <Instagram className="size-4.5 text-black/70" />
            <Twitter className="size-4.5 text-black/70" />
            <Youtube className="size-4.5 text-black/70" />
            <Mail className="size-4.5 text-black/70" />
          </SheetDescription>
        </SheetHeader>

        <NavLinks className="flex flex-col gap-4 items-start divide-y divide-black/10 px-4 font-medium *:pb-2 *:w-full text-sm" />
      </SheetContent>
    </Sheet>
  );
}

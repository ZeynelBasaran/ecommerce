import { ShoppingCart, UserIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { APP_NAME } from "@/lib/contants";
import ModeToggleTheme from "./modeToggleTheme";
import logo4 from "@/public/logo3.jpg"
import { SheetDemo } from "./sheet";


const Header = () => {
  return (
    <header className="w-full border-b ">
      <div className="flex justify-between items-center">
        <div className="">
          <Link className="cursor-pointer flex items-center py-2" href="/card" >
            <Image
            src={logo4}
            alt={`${APP_NAME} logo`}
            height={70}
            width={70}
            priority={true}
            />
            <span className="hidden lg:block text-2xl ml-3">
            {APP_NAME}
            </span>
            </Link>
            
        </div>

        <div className="space-x-2">
          <ModeToggleTheme/>
          <Button asChild className="" variant="ghost ">
            <Link href="/card">
              Sepet
            </Link>
          </Button>
          <Button asChild >
            <Link href="/sign-in">
              <UserIcon /> Sign In
            </Link>
          </Button>
          <SheetDemo />
        </div>
      </div>
    </header>
  );
};

export default Header;

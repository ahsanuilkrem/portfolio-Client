"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { NavMenu } from "./nav-menu";
import { NavigationSheet } from "./navigation-Sheet";
import { signOut, useSession } from "next-auth/react";
import { LogOut } from "lucide-react";


const Navbar = () => {

   const session = useSession();

  return (
    <nav className="fixed top-6 inset-x-4 h-16 max-w-screen-xl mx-auto rounded-full bg-blue-50 border dark:border-slate-700/70 z-30">
      <div className="flex h-full items-center justify-between px-6 md:px-8">
        {/* Logo with consistent padding */}
        <Link href="/" className="flex-shrink-0 ">
          {/* <Logo /> */}
          <p className="text-1xl font-medium hover:text-cyan-600 ">My Portfolio</p>
        </Link>

        {/* Desktop Menu with consistent horizontal spacing */}
        <NavMenu className="hidden md:block" />

       

        {/* Actions and Mobile Menu */}
        <div className="flex items-center gap-4 md:gap-6">
             {session.status === "authenticated" && ( 
          <Button
            variant="destructive"
            className="w-full justify-start gap-2 cursor-pointer"
            onClick={() => signOut()}
          >
            <LogOut className="h-4 w-4" />
            Logout
          </Button>
        )} 

        {!session?.data?.user.email &&  (
           <Button className="rounded-full px-5 py-2 text-sm md:text-base">
            <Link href="/login" className="block w-full text-center">
              Login
            </Link>
          </Button>
        )}

         

          {/* Mobile Menu */}
          <div className="md:hidden">
            <NavigationSheet />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

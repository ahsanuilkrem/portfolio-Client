
/* eslint-disable react-hooks/rules-of-hooks */

import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList } from "@/components/ui/navigation-menu";
import { NavigationMenuProps } from "@radix-ui/react-navigation-menu";
import { useSession } from "next-auth/react";
import Link from "next/link";




export const NavMenu = (props: NavigationMenuProps) => {


  const { data: session, status } = useSession();

  if (status === "loading") {

    return null;
  }


  return (
    <NavigationMenu {...props}>
      <NavigationMenuList className="gap-6 space-x-0 data-[orientation=vertical]:flex-col data-[orientation=vertical]:items-start font-medium">
        <NavigationMenuItem>
          <NavigationMenuLink asChild>
            <Link href="/">Home</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink asChild>
            <Link href="/blog">Blogs</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink asChild>
            <Link href="/about">About</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuLink asChild>
            <Link href="/project">Project</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>

        {
          session?.user.role === "ADMIN" && (
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link href="/dashboard">dashboard</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
          )
        }

      </NavigationMenuList>
    </NavigationMenu>
  );
};



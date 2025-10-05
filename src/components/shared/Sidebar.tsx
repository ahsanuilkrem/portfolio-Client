"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Home, PlusCircle, LogOut, Files } from "lucide-react";
import { signOut, useSession } from "next-auth/react";


export default function Sidebar() {
  const session = useSession();

  return (
    <aside className="flex h-screen w-64 flex-col border-r bg-black text-white">
      {/* Top navigation */}
      <nav className="flex-1 space-y-2 p-4">
        <Link
          href="/"
          className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium hover:bg-gray-100 hover:text-black"
        >
          <Home className="h-4 w-4" />
          Home
        </Link>
          <h2 className="text-1xl font-medium">Blog</h2>
          {/* Create Blog */}
        <Link
          href="/dashboard/create-blog"
          className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium hover:bg-gray-100 hover:text-black"
        >
          <PlusCircle className="h-4 w-4" />
          Create Blog
        </Link>

        {/* All Blog  */}
        <Link
          href="/dashboard/all-Blog"
          className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium hover:bg-gray-100 hover:text-black"
        >
          <Files className="h-4 w-4" />
          All Blog
        </Link>
          {/* Project */}
          <h2 className="text-1xl font-medium">project</h2>
          {/* Create Project */}
         <Link
          href="/dashboard/create-project"
          className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium hover:bg-gray-100 hover:text-black"
        >
          <PlusCircle className="h-4 w-4" />
          Create Project
        </Link>

        {/* All project */}
          <Link
          href="/dashboard/allProjects"
          className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium hover:bg-gray-100 hover:text-black"
        >
          <Files className="h-4 w-4" />
          All Project
        </Link>



      </nav>

      {/* Bottom action */}
      <div className="p-4 border-t border-gray-500">
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

      </div>
    </aside>
  );
}

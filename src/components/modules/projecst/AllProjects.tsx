"use client";
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Trash2 } from "lucide-react";
import Link from "next/link";
import { Project } from "@/types";

const AllProjects = ({ project , index }: { project: Project; index: number  }) => {

    const handleDelete = async (id: number) => {
    const confirmed = confirm("Are you sure you want to delete this project?");
    if (!confirmed) return;

    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/project/${id}`, {
        method: "DELETE",
      });

      if (res.ok) {
        alert("project deleted successfully");
        location.reload(); 
      } else {
        alert("Failed to delete project");
      }
    } catch (error) {
      console.error("Delete error:", error);
      alert("Something went wrong");
    }
};


  return (
    <tr className="border-b border-gray-200 hover:bg-gray-50">
  <td className="px-4 py-2 border border-gray-200">{index + 1}</td>
  <td className="px-4 py-2 border border-gray-200">{project.title}</td>
   <td className="px-4 py-2 border border-gray-200">{project.features?.join(", ")}</td>
  <td className="px-4 py-2 border border-gray-200">{project.views}</td>
   
  <td className="px-4 py-2 border border-gray-200 space-x-2">
    <Link
      href={`/dashboard/allProjects/${project.id}`}
      className=" inline-flex items-center gap-1 px-3 py-1 text-sm font-medium border border-b-blue-200 rounded text-blue-600 hover:bg-blue-900 hover:text-white transition-colors mb-1"
    >
      Update
    </Link>
    <button
       onClick={() => handleDelete(project.id)}
      className= "inline-flex items-center gap-1 px-3 py-1 text-sm font-medium border border-red-600 rounded hover:bg-red-600 hover:text-white transition-colors text-red-600 "
    >
        <Trash2 className="w-4 h-4" />
      Delete
    </button>
  </td>
</tr>

  );
};

export default AllProjects;

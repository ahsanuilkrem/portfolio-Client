


/* eslint-disable @typescript-eslint/no-explicit-any */
import BlogCard from "@/components/modules/Blogs/BlogCard";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "All Blogs | Next Blog",
  description:
    "Browse all blog posts on web development, Next.js, React, and more. Stay updated with the latest tutorials and articles.",
};


const AllBlogsPage = async () => {

  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/post`, {
    cache: "no-store"
  })
    const resData = await res.json();
  const blogs = resData.data.data;
  
  console.log(blogs)

  return (
    <div className="py-30 px-4  bg-blue-50">
      <h2 className="text-center text-4xl font-bold my-6 hover:text-blue-500">All Blogs</h2>
      <div className="grid grid-cols-1  sm:grid-cols-2 lg:grid-cols-3  gap-4 mx-auto max-w-6xl ">
        {
          blogs.map((blog : any) => (
            <BlogCard  key={blog?.id} post={blog} />
          ))
        }
      </div>
    </div>
  );
};

export default AllBlogsPage;

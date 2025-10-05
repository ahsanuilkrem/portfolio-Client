/* eslint-disable @typescript-eslint/no-explicit-any */

import AllBlogs from "@/components/modules/Blogs/AllBlogs";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dashboard | all Blog post",
}

const AllBlogPage = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/post`, {
        cache: "no-store"
    })
    const resData = await res.json();
    const blogs = resData.data.data;

    // console.log("all blog", blogs)
    return (
        <div>
            <h1 className="text-3xl font-bold text-center my-4"> All Blog post</h1>
            <table className="mx-5">
                <thead className="bg-gray-100 border-b">
                    <tr>
                        <th className="px-4 py-2 border border-gray-200">#</th>
                        <th className="px-4 py-2 border border-gray-200">Title</th>
                        <th className="px-4 py-2 border border-gray-200">Featured</th>
                        <th className="px-4 py-2 border border-gray-200">Tags</th>
                        <th className="px-4 py-2 border border-gray-200">Views</th>
                        <th className="px-4 py-2 border border-gray-200">Author</th>
                        <th className="px-4 py-2 border border-gray-200">Actions</th>
                    </tr>
                </thead>
                <tbody className="px-4 ">
                    {
                        blogs.map((blog: any, index: number) => (
                            <AllBlogs key={blog?.id} post={blog} index={index} />
                        ))
                    }
                </tbody>

            </table>

        </div>
    );
};

export default AllBlogPage;
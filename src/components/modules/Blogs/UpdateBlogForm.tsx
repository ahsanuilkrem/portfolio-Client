"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

type Blog = {
  id: number;
  title: string;
  content: string;
  thumbnail?: string;
  tags: string[];
};

export default function UpdateBlogForm ({ blog: id }: { blog:number }) {
  
  const router = useRouter();

  const [blog, setBlog] = useState<Blog | null>(null);
  const [loading, setLoading] = useState(true);
  

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/post/${id}`);
        const json = await res.json();
        setBlog(json?.data);
      } catch (err) {
        console.error("Failed to load blog", err);
      } finally {
        setLoading(false);
      }
    };

    fetchBlog();
  }, [id]);

  const handleUpdate = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const updated = {
      title: formData.get("title"),
      content: formData.get("content"),
      thumbnail: formData.get("thumbnail"),
      tags: (formData.get("tags") as string)?.split(",").map((tag) => tag.trim()),
    };

    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/post/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updated),
    });

    if (res.ok) {
      alert("Blog updated successfully");
      router.push("/dashboard/all-Blog");
    } else {
      alert("Failed to update blog");
    }
  };

  if (loading || !blog) return <div>Loading blog...</div>;

  return (
    <form onSubmit={handleUpdate} className="max-w-4xl mx-auto p-6 bg-white shadow rounded space-y-4 w-full">
      <h2 className="text-2xl font-semibold text-center my-3" >Update Blog</h2>

      <div>
        <label className="block mb-1">Title</label>
        <input
          name="title"
          defaultValue={blog.title}
          className="w-full border rounded px-3 py-2"
        />
      </div>

      <div>
        <label className="block mb-1">Content</label>
        <textarea
          name="content"
          defaultValue={blog.content}
          rows={5}
          className="w-full border rounded px-3 py-2"
        />
      </div>

      <div>
        <label className="block mb-1">Thumbnail URL</label>
        <input
          name="thumbnail"
          defaultValue={blog.thumbnail || ""}
          className="w-full border rounded px-3 py-2"
        />
      </div>

      <div>
        <label className="block mb-1">Tags (comma separated)</label>
        <input
          name="tags"
          defaultValue={blog.tags.join(", ")}
          className="w-full border rounded px-3 py-2"
        />
      </div>

      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
      >
        Update Blog
      </button>
    </form>
  );
}

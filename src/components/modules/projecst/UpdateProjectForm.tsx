"use client";

import { Project } from "@/types";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";



const UpdateProjectForm = ({ project: id }: { project: string }) => {

    const router = useRouter();
    const [project, setProject] = useState<Project | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchBlog = async () => {
            try {
                const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/project/${id}`);
                const json = await res.json();
                setProject(json?.data);
            } catch (err) {
                console.error("Failed to load blog", err);
            }
            finally {
                setLoading(false);
            }
        };

        fetchBlog();
    }, [id]);

    const handleUpdate = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);



        const updatedProject = {
            title: formData.get("title"),
            description: formData.get("description"),
            gitFrontend: formData.get("gitFrontend") || undefined,
            gitBackend: formData.get("gitBackend") || undefined,
            liveUrl: formData.get("liveUrl"),
            thumbnail: formData.get("thumbnail"),
            features: (formData.get("features") as string)?.split(",")
                .map((f) => f.trim())
                .filter((f) => f !== "")
        };

        const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/project/${id}`, {
            method: "PATCH",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(updatedProject),
        });

        if (res.ok) {
            alert("");
            toast.dismiss();
            toast.success("project updated successfully");
            router.push("/dashboard/allProjects");
        } else {
            toast.dismiss();
            toast.error("Failed to update blog")
            
        }
    };

    if (loading || !project) return <div>Loading blog...</div>;




    return (

        <form onSubmit={handleUpdate} className="max-w-4xl mx-auto p-6 bg-white shadow rounded space-y-4 w-full">
            <h2 className="text-2xl font-semibold text-center my-3">Update Project</h2>

            <div>
                <label className="block mb-1">Title</label>
                <input
                    name="title"
                    defaultValue={project.title}
                    className="w-full border rounded px-3 py-2"
                />
            </div>

            <div>
                <label className="block mb-1">Description</label>
                <textarea
                    name="description"
                    defaultValue={project.description}
                    rows={4}
                    className="w-full border rounded px-3 py-2"
                />
            </div>

            <div>
                <label className="block mb-1">Frontend GitHub URL</label>
                <input
                    name="gitFrontend"
                    defaultValue={project.gitFrontend || ""}
                    className="w-full border rounded px-3 py-2"
                />
            </div>

            <div>
                <label className="block mb-1">Backend GitHub URL</label>
                <input
                    name="gitBackend"
                    defaultValue={project.gitBackend || ""}
                    className="w-full border rounded px-3 py-2"
                />
            </div>

            <div>
                <label className="block mb-1">Live URL</label>
                <input
                    name="liveUrl"
                    defaultValue={project.liveUrl}
                    className="w-full border rounded px-3 py-2"
                />
            </div>

            <div>
                <label className="block mb-1">Thumbnail URL</label>
                <input
                    name="thumbnail"
                    defaultValue={project.thumbnail}
                    className="w-full border rounded px-3 py-2"
                />
            </div>

            <div>
                <label className="block mb-1">Features (comma separated)</label>
                <input
                    name="features"
                    defaultValue={project.features.join(", ")}
                    className="w-full border rounded px-3 py-2"
                />
            </div>

            <button
                type="submit"
                className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
            >
                Update Project
            </button>
        </form>


    );
};

export default UpdateProjectForm;
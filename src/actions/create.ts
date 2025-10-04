
"use server";

import { getUserSession } from "@/helpers/getUserSession";
import { revalidatePath, revalidateTag } from "next/cache";
import { redirect } from "next/navigation";


export const create = async (data: FormData) => {

    const session = await getUserSession();
    
    const blogInfo = Object.fromEntries(data.entries());
    const modifiedData = {
        ...blogInfo,
        tags: blogInfo.tags
            .toString()
            .split(",")
            .map((tag) => tag.trim()),
        authorId: session?.user?.id,
        isFeatured: Boolean(blogInfo.isFeatured),
    };

    console.log(modifiedData)

    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/post`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(modifiedData),
    });

    const result = await res.json();

    if (result?.data.id) {
        revalidateTag("BLOGS");
        revalidatePath("/blog");
        redirect("/");
    }
    return result;
};

export const project = async (data: FormData) => {

    
    const projectInfo = Object.fromEntries(data.entries());
    const modifiedProjectData = {
        ...projectInfo,
        features: projectInfo.features
            .toString()
            .split(",")
            .map((feature) => feature.trim()),
        
    };

    console.log("project", modifiedProjectData)

    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/project`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(modifiedProjectData),
    });

    const result = await res.json();

    if (result?.data.id) {
        revalidateTag("PROJECT");
        revalidatePath("/project");
        redirect("/project");
    }
    return result;
};
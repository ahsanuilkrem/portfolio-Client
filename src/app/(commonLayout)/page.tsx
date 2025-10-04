/* eslint-disable @typescript-eslint/no-explicit-any */
import BlogCard from "@/components/modules/Blogs/BlogCard";
import Hero from "@/components/modules/Home/Hero";
import { Metadata } from "next";
import { Project } from './../../types/index';
import ProjectCard from "@/components/modules/projecst/ProjectCard";


export const metadata: Metadata = {
  title: "Home",
}

const HomePage = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/post`,{
      next: {
        tags: ["BLOGS"],
      }
    });
      const resData = await res.json();
      const blogs = resData.data.data;
    //  console.log(blogs)

    const res2 = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/project`, {
      next: {
       tags : ["PROJECT"]
      }
    })

    const res2Data = await res2.json();
    const projects = res2Data.data.data;
    console.log(projects)


  return (
    <div >
       <Hero />
      <h2 className="text-center my-5 text-4xl">Featured Posts </h2>

      <div className="grid grid-cols-3 gap-4 max-w-6xl mx-auto my-10">
        {
          blogs?.slice(0, 3).map( (blog : any) => ( 
          <BlogCard key={blog?.id}  post={blog} />
        ))
        }
      </div>

        <h2 className="text-center my-5 text-4xl">My Projects</h2>
        
        <div className="grid grid-cols-2 gap-4 max-w-6xl mx-auto my-10">
            {
              projects?.slice(0, 2).map((project: Project )=> (
                <ProjectCard key={project.id} project={project} />
              ))
            }
        </div>

    </div>
  );
};

export default HomePage;
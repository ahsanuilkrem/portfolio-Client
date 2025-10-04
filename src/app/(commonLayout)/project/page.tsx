import ProjectCard from '@/components/modules/projecst/ProjectCard';
import { Project } from '@/types';
import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: "project",
}

const AllProjectPage = async () => {

  
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/project`)

    const resData = await res.json();
    const projects = resData.data.data;
    console.log(projects)


    return (
        <div className="py-30 px-4 max-w-7xl mx-auto">
             <h2 className='text-center text-4xl'>All Project</h2>
               <div className="grid grid-cols-2 gap-4 max-w-6xl mx-auto my-10">
                         {
                           projects.map((project: Project )=> (
                             <ProjectCard key={project.id} project={project} />
                           ))
                         }
                     </div>
        </div>
    );
};

export default AllProjectPage;
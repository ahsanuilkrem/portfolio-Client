import React from 'react';
import { Project } from './../../../../types/index';
import AllProjects from '@/components/modules/projecst/AllProjects';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Dashboard | all projects",
}

const AllProjectsPage = async () => {

    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/project`, {
        cache: "no-store"
    })
    const resData = await res.json();
    const projects = resData.data.data;

    // console.log("all Project", projects)

    return (
        <div className='max-w-5xl mx-auto'>
         <h1 className="text-3xl font-bold text-center my-4">My All Projects</h1>
            <table className="mx-5">
                <thead className="bg-gray-100 border-b">
                    <tr>
                        <th className="px-4 py-2 border border-gray-200">#</th>
                        <th className="px-4 py-2 border border-gray-200">Title</th>
                        <th className="px-4 py-2 border border-gray-200">Features</th>
                        <th className="px-4 py-2 border border-gray-200">Views</th>
                        <th className="px-4 py-2 border border-gray-200">Actions</th>
                    </tr>
                </thead>
                <tbody className="px-4 ">
                    {
                        projects.map((project: Project, index: number) => (
                            <AllProjects key={project?.id} project={project} index={index} />
                        ))
                    }
                </tbody>

            </table>

        </div>
    );
};

export default AllProjectsPage;
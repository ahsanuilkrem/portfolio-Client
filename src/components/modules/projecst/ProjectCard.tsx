

'use client';

import { Project } from '@/types';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';



const ProjectCard = ({ project }: { project: Project }) => {
    return (
        <div className="bg-blue-100 dark:bg-gray-900 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
           
            {project.thumbnail ? (
                <div className="relative h-72 w-full overflow-hidden">
                    <Image
                        src={project.thumbnail}
                        alt={project.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                </div>
            ) : (
                <div className="h-56 w-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center text-gray-500 dark:text-gray-300">
                    No Image
                </div>
            )}


            <div className="p-6">
                <h2 className="text-2xl font-bold mb-2"> {project.title}</h2>
                <p className="text-gray-700 mb-4">{project.description}</p>

                 <h4 className='text-2xl font-medium mb-3'>Key Features</h4>   

                <ul className="list-disc pl-5 text-gray-800 mb-4">
                    {project.features.map((feature, index) => (
                        <li key={index}>{feature}</li>
                    ))}
                </ul>

                <div className="flex flex-wrap gap-4 mb-3">
                    <Link
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 underline"
                    >
                        🔗 Live Demo
                    </Link>
                    <Link
                        href={project.gitFrontend}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 underline"
                    >
                        💻 Frontend
                    </Link>
                    <Link
                        href={project.gitBackend}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 underline"
                    >
                        🛠️ Backend
                    </Link>
                </div>

                <div className="text-sm text-gray-500">
                    🗓️ Created on: {new Date(project.createdAt).toLocaleDateString()} | 👁️ Views: {project.views}
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;

// max-w-xl mx-auto bg-white shadow-md rounded-lg overflow-hidden border border-gray-200
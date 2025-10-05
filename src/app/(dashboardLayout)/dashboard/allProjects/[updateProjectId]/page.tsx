

import UpdateProjectForm from '@/components/modules/projecst/UpdateProjectForm';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Dashboard | update Project",
}


const UpdateProjectPage = async ({ params }: { params: Promise<{ updateProjectId: string }> }) => {

    const { updateProjectId } = await params;
   
    return (
        <div className="w-full flex justify-center items-center">
            
            <UpdateProjectForm project={updateProjectId} />
        </div>
    );
};

export default UpdateProjectPage;
/* eslint-disable @typescript-eslint/no-explicit-any */


import { Metadata } from "next";
import CreateProcetForm from './../../../../components/modules/projecst/CreateProcetForm';

export const metadata: Metadata = {
    title: "Dashboard | create project",
}


const CreateProjectPage = () => {

 

    return (
        <div className="w-full flex justify-center items-center">
            <CreateProcetForm  />
        </div>
    );
};

export default CreateProjectPage;
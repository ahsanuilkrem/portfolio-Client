import UpdateBlogForm from "@/components/modules/Blogs/UpdateBlogForm";
import { Metadata } from "next";


export const metadata: Metadata = {
  title: "Dashboard | update Blog",
}


const UpdateBlogPage = async ({params}:{params: Promise<{updateId:number}>}) => {
    
     const { updateId } = await params;
    

    return (
        <div className="w-full flex justify-center items-center">
            
            <UpdateBlogForm blog={updateId} />
        </div>
    );
};

export default UpdateBlogPage;
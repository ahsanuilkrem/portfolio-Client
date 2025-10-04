import CreateBlogForm from "@/components/modules/Blogs/CreateBlogForm";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dashboard | create Blog",
}

const CreateBlog = () => {
    return (
        <div className="w-full flex justify-center items-center">
            <CreateBlogForm />
        </div>
    );
};

export default CreateBlog;
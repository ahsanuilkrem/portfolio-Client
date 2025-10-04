import UpdateBlogForm from "@/components/modules/Blogs/UpdateBlogForm";

const UpdateBlogPage = async ({params}:{params: Promise<{updateId:number}>}) => {
     const { updateId } = await params;
     console.log(params)
      console.log("update", updateId)

    return (
        <div className="w-full flex justify-center items-center">
            
            <UpdateBlogForm blog={updateId} />
        </div>
    );
};

export default UpdateBlogPage;
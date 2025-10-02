/* eslint-disable @typescript-eslint/no-explicit-any */


// export const generateStaticParams = async () => {
//   const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/post`);
//   const { data: blogs } = await res.json();

//   return blogs.slice(0, 2).map((blog: any) => ({
//     blogId: String(blog.id),
//   }));
// };

// export const generateMetadata = async ({
//   params,
// }: {
//   params: Promise<{ blogId: string }>;
// }) => {
//   const { blogId } = await params;
//   const blog = await getBlogById(blogId);
//   return {
//     title: blog?.title,
//     description: blog?.content,
//   };
// };

const BlogDetalisPage = async ({params}:{params: Promise<{blogId: string}>}) => {
    // console.log(await params);
    const {blogId} = await params;
    //  const blog = await getBlogById(blogId);
    // const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/post/${blogId}`)
    // const blog = await res.json();
    // console.log(blog)
    return (
        <div className="py-30 px-4 max-w-7xl mx-auto">
            <h1>Blog Detalis Page {blogId}</h1>
            {/* <BlogDetailsCard blog={blog} /> */}
        </div>
    );
};

export default BlogDetalisPage;


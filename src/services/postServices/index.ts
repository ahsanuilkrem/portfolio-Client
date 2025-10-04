
export const getBlogById = async (blogId: string) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/post/${blogId}`);
   const resData = await res.json();
    const blog = resData.data;
  return blog;
};
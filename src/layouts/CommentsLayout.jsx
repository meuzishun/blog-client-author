import { useLoaderData, Outlet } from 'react-router-dom';

export default function CommentsLayout() {
  const { post } = useLoaderData();

  return (
    <div className='container'>
      <h3 className='row mt-3 mb-2 text-primary font-xl'>{post.title} </h3>
      <p className='row mb-3 font-md'>{post.content}</p>
      <Outlet />
    </div>
  );
}

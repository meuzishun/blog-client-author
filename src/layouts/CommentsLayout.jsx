import { useLoaderData, Link, Outlet } from 'react-router-dom';

export default function CommentsLayout() {
  const { post } = useLoaderData();

  return (
    <div className='container'>
      <Link to={'/posts/' + post._id}>
        <h3 className='row mt-3 mb-2 text-primary font-xl'>{post.title} </h3>
      </Link>
      <p className='row mb-3 font-md'>{post.content}</p>
      <Outlet />
    </div>
  );
}

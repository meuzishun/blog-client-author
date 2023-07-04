const apiRoot = import.meta.env.VITE_API_ROOT;
import { useLoaderData, Link } from 'react-router-dom';

export default function PostDetails() {
  const { post } = useLoaderData();

  const togglePublication = async (post) => {
    const response = await fetch(apiRoot + '/posts/' + post._id, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Authorization: localStorage.getItem('token'),
      },
      body: JSON.stringify({
        isPublished: !post.isPublished,
      }),
    });

    if (response.ok) {
      window.location.reload(false);
    }
  };

  return (
    <div className='container'>
      <h3 className='row mt-3 mb-2 text-primary font-xl'>{post.title} </h3>
      <p className='row mb-3 font-md'>{post.content}</p>
      <div className='display-f justify-center mb-3'>
        <Link
          className='btn-outlined-primary text-primary text-hover-white ml-1 mr-1'
          to='comments'
        >
          View Comments
        </Link>
      </div>
      <div className='display-f justify-center mb-4'>
        <Link
          className='btn-outlined-primary text-primary text-hover-white ml-1 mr-1'
          to='edit'
        >
          Edit Post
        </Link>
        <Link
          className='btn-outlined-red text-red text-hover-white ml-1 mr-1'
          to='delete'
        >
          Delete Post
        </Link>
        <button
          className='btn-outlined-secondary text-secondary text-hover-white font-md ml-1 mr-1'
          onClick={() => {
            togglePublication(post);
          }}
        >
          {post.isPublished ? 'Unpublish' : 'Publish'} Post
        </button>
      </div>
    </div>
  );
}

const apiRoot = import.meta.env.VITE_API_ROOT;
import { useLoaderData, Link } from 'react-router-dom';

export default function Posts() {
  const { posts } = useLoaderData();

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
    <div>
      {posts.map((post) => (
        <div key={post._id}>
          <Link to={post._id.toString()}>{post.title}</Link>
          {' | '}
          <Link to={post._id.toString() + '/edit'}>Edit</Link>
          {' | '}
          <Link to={post._id.toString() + '/delete'}>Delete</Link>
          {' | '}
          <button
            onClick={() => {
              togglePublication(post);
            }}
          >
            {post.isPublished ? 'Unpublish' : 'Publish'}
          </button>
          <hr />
        </div>
      ))}
      <Link to='new'>Create New Post</Link>
    </div>
  );
}

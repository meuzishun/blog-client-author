const apiRoot = import.meta.env.VITE_API_ROOT;
import { useLoaderData, Link } from 'react-router-dom';

export default function Posts() {
  const { posts } = useLoaderData();

  const togglePublication = async (e) => {
    // TODO: There has to be a better way to get this data
    const postId = e.target.parentElement.firstChild.href.split('/').at(-1);
    console.log(postId);
    const postPublished = e.target.textContent === 'Unpublish';
    console.log(postPublished);

    const response = await fetch(apiRoot + '/posts/' + postId, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Authorization: localStorage.getItem('token'),
      },
      body: JSON.stringify({
        isPublished: !postPublished,
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
          <button onClick={togglePublication}>
            {post.isPublished ? 'Unpublish' : 'Publish'}
          </button>
          <hr />
        </div>
      ))}
      <Link to='new'>Create New Post</Link>
    </div>
  );
}

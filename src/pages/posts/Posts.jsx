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
      <h3 className='mt-3 mb-1 pl-2 pr-2 display-f justify-center text-primary font-xl'>
        Posts
      </h3>
      <div className='container'>
        {posts.map((post) => (
          <div
            className='row pt-1 pb-1 display-f justify-space-between'
            key={post._id}
          >
            <Link className='font-lg' to={post._id.toString()}>
              {post.title}
            </Link>
            <div>
              <Link
                className='btn-outlined-primary ml-1 mr-1 pr-1 pl-1 pt-0 pb-0 font-md text-primary text-hover-white'
                to={post._id.toString() + '/edit'}
              >
                Edit
              </Link>
              <Link
                className='btn-outlined-error ml-1 mr-1 pr-1 pl-1 pt-0 pb-0 font-md text-error text-hover-white'
                to={post._id.toString() + '/delete'}
              >
                Delete
              </Link>
              <button
                className='btn-outlined-secondary ml-1 mr-1 pr-1 pl-1 pt-0 pb-0 font-md text-secondary text-hover-white pub-btn'
                onClick={() => {
                  togglePublication(post);
                }}
              >
                {post.isPublished ? 'Unpublish' : 'Publish'}
              </button>
            </div>
          </div>
        ))}
        <div className='row justify-center mt-3'>
          <Link className='btn-primary font-lg text-white' to='new'>
            Create New Post
          </Link>
        </div>
      </div>
    </div>
  );
}

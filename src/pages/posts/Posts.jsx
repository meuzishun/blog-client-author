import { useLoaderData, Link } from 'react-router-dom';

export default function Posts() {
  const { posts } = useLoaderData();

  return (
    <div>
      {posts.map((post) => (
        <div key={post.id}>
          <Link to={post._id.toString()}>
            <p>{post.title}</p>
          </Link>
          <br />
        </div>
      ))}
      <Link to='new'>Create Post</Link>
    </div>
  );
}

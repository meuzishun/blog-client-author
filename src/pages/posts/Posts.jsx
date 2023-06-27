import { useLoaderData, Link } from 'react-router-dom';

export default function Posts() {
  const posts = useLoaderData();

  return (
    <div>
      {posts.map((post) => (
        <>
          <Link to={post.id.toString()} key={post.id}>
            <p>{post.title}</p>
          </Link>
          <br />
        </>
      ))}
      <Link to='new'>Create Post</Link>
    </div>
  );
}

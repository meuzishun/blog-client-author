import { useLoaderData, Link } from 'react-router-dom';

export default function PostDetails() {
  const post = useLoaderData();

  return (
    <div>
      <h3>PostDetails for post {post.id}</h3>
      <p>{post.title}</p>
      <p>{post.body}</p>
      <br />
      <Link to='edit'>Edit</Link>
      <br />
      <Link to='comments'>Comments</Link>
    </div>
  );
}

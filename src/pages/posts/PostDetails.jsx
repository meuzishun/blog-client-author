import { useLoaderData, Link } from 'react-router-dom';

export default function PostDetails() {
  const { post } = useLoaderData();

  return (
    <div>
      <h3>Details for post {post._id}</h3>
      <p>{post.title}</p>
      <p>{post.content}</p>
      <br />
      <Link to='edit'>Edit Post</Link>
      <br />
      <Link to='comments'>Comments</Link>
      <br />
      <Link to='delete'>Delete Post</Link>
    </div>
  );
}

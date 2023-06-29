import { useLoaderData, Link } from 'react-router-dom';

export default function PostDetails() {
  const { post } = useLoaderData();
  console.log(post);

  return (
    <div>
      <h3>Details for post {post._id}</h3>
      <p>{post.title}</p>
      <p>{post.content}</p>
      <br />
      <Link to='edit'>Edit</Link>
      <br />
      <Link to='comments'>Comments</Link>
    </div>
  );
}

import { useLoaderData, Link } from 'react-router-dom';

export default function CommentDetails() {
  const { comment } = useLoaderData();
  console.log(comment);

  return (
    <div>
      <h3>Details for post {comment._id}</h3>
      <p>
        {comment.author.firstName} {comment.author.lastName}
      </p>
      <p>{comment.content}</p>
      <br />
      <Link to='edit'>Edit</Link>
    </div>
  );
}

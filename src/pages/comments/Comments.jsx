import { useLoaderData, Link } from 'react-router-dom';

export default function Comments() {
  const { comments } = useLoaderData();

  return (
    <div>
      {comments.map((comment) => (
        <div key={comment._id}>
          <Link to={comment._id.toString()}>
            <p>
              <span>
                {comment.author.firstName} {comment.author.lastName}
              </span>
              - {comment.content}
            </p>
          </Link>
          <br />
        </div>
      ))}
      <Link to='new'>Create Comment</Link>
    </div>
  );
}

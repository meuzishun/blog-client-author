import { useLoaderData, Link } from 'react-router-dom';

export default function Comments() {
  const { comments } = useLoaderData();
  console.log(comments);

  return (
    <div>
      {comments.map((comment) => (
        <div key={comment.id}>
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

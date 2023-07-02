import { useLoaderData, Link } from 'react-router-dom';

export default function Comments() {
  const { comments } = useLoaderData();

  return (
    <div>
      {comments.map((comment) => (
        <div key={comment._id}>
          <Link to={comment._id.toString()}>
            {comment.author.firstName} {comment.author.lastName}
            {' - '}
            {comment.content}
          </Link>
          {' | '}
          <Link to={comment._id + '/edit'}>Edit</Link>
          {' | '}
          <Link to={comment._id + '/delete'}>Delete</Link>
          <hr />
        </div>
      ))}
      <Link to='new'>Create Comment</Link>
    </div>
  );
}

import { useParams, Link } from 'react-router-dom';

export default function CommentDetails() {
  const { commentId } = useParams();
  return (
    <div>
      CommentDetails
      <p>ID: {commentId}</p>
      <Link to='edit'>Edit comment</Link>
    </div>
  );
}

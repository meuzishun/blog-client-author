import { useParams, Link } from 'react-router-dom';

export default function PostDetails() {
  const { postId } = useParams();
  return (
    <div>
      PostDetails for post {postId}
      <br />
      <Link to='edit'>Edit</Link>
      <br />
      <Link to='comments'>Comments</Link>
    </div>
  );
}

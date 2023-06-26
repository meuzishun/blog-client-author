import { useParams } from 'react-router-dom';

export default function PostEdit() {
  const { postId } = useParams();

  return <div>Edit post with ID: {postId}</div>;
}

import { useParams } from 'react-router-dom';

export default function CommentEdit() {
  const { postId, commentId } = useParams();
  return (
    <div>
      CommentEdit for comment {commentId} in post {postId}
    </div>
  );
}

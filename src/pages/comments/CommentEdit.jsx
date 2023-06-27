import { useParams } from 'react-router-dom';

export default function CommentEdit() {
  const { postId, commentId } = useParams();
  return (
    <div>
      <h3>
        CommentEdit for comment {commentId} in post {postId}
      </h3>
      <form>
        <div>
          <label>Title</label>
          <input></input>
        </div>
        <div>
          <label>Content</label>
          <textarea></textarea>
        </div>
        <button type='submit'>Submit</button>
        <button type='button'>Cancel</button>
      </form>
    </div>
  );
}

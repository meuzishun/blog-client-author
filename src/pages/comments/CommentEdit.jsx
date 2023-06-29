import { useState, useEffect } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

export default function CommentEdit() {
  const { postId, commentId } = useParams();
  const { comment } = useLoaderData();

  const [content, setContent] = useState(null);

  useEffect(() => {
    setContent(comment.content);
  }, [comment]);

  return (
    <div>
      <h3>
        Edit comment {commentId} in post {postId}
      </h3>
      <form>
        <div>
          <label>Content</label>
          <textarea
            defaultValue={content}
            onChange={(e) => setContent(e.target.value)}
          ></textarea>
        </div>
        <button type='submit'>Submit</button>
        <button type='button'>Cancel</button>
      </form>
    </div>
  );
}

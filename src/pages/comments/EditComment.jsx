import { useLoaderData, useParams, Form, useNavigate } from 'react-router-dom';

export default function EditComment() {
  const { postId, commentId } = useParams();
  const { comment } = useLoaderData();
  const navigate = useNavigate();

  return (
    <div>
      <h3>
        Edit comment {commentId} in post {postId}
      </h3>
      <Form
        method='post'
        action={'/posts/' + postId + '/comments/' + commentId + '/edit'}
      >
        <p>
          {comment.author.firstName} {comment.author.lastName}
        </p>
        <div>
          <label>Content</label>
          <textarea
            id='content'
            name='content'
            defaultValue={comment.content}
          ></textarea>
        </div>
        <button type='submit'>Submit</button>
        <button
          type='button'
          onClick={() => {
            navigate(-1);
          }}
        >
          Cancel
        </button>
      </Form>
    </div>
  );
}

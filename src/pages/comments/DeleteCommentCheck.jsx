import { useLoaderData, useParams, Form, useNavigate } from 'react-router-dom';

export default function DeleteCommentCheck() {
  const { comment } = useLoaderData();
  const { postId, commentId } = useParams();
  const navigate = useNavigate();

  return (
    <div>
      <h3>Are you sure you want to delete comment {comment._id}?</h3>
      <Form
        method='post'
        action={'/posts/' + postId + '/comments/' + commentId + '/delete'}
      >
        <button type='submit'>Delete</button>
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

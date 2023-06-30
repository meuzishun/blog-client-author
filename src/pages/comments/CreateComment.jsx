import { Form, useNavigate, useParams } from 'react-router-dom';

export default function CreateComment() {
  const navigate = useNavigate();
  const { postId } = useParams();

  return (
    <div>
      <h3>Create a new comment</h3>
      <Form method='post' action={'/posts/' + postId + '/comments/new'}>
        <div>
          <label>Content</label>
          <textarea name='content' id='content' required></textarea>
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

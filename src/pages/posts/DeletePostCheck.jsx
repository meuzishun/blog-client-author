import { useLoaderData, useParams, Form, useNavigate } from 'react-router-dom';

export default function DeletePostCheck() {
  const { post } = useLoaderData();
  const { postId } = useParams();
  const navigate = useNavigate();

  return (
    <div>
      <h3>Are you sure you want to delete post {post.id}?</h3>
      <Form method='post' action={'/posts/' + postId + '/delete'}>
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

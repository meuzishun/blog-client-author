import { useLoaderData, useParams, Form, useNavigate } from 'react-router-dom';

export default function DeleteCommentCheck() {
  const { comment } = useLoaderData();
  const { postId, commentId } = useParams();
  const navigate = useNavigate();

  return (
    <div>
      <h3 className='row justify-center mt-3 ml-1 mr-1 font-lg text-primary'>
        Are you sure you want to delete this comment?
      </h3>
      <p className='row justify-center mt-1 ml-1 mr-1 font-md text-primary'>
        &quot;{comment.content}&quot;
      </p>
      <Form
        className='display-f justify-center mt-3 mb-3'
        method='post'
        action={'/posts/' + postId + '/comments/' + commentId + '/delete'}
      >
        <button
          className='btn-outlined-red text-red text-hover-white font-md ml-1 mr-1'
          type='submit'
        >
          Delete
        </button>
        <button
          className='btn-outlined-gray text-gray text-hover-white font-md ml-1 mr-1'
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

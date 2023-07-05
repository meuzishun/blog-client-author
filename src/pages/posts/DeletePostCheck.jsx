import { useLoaderData, useParams, Form, useNavigate } from 'react-router-dom';

export default function DeletePostCheck() {
  const { post } = useLoaderData();
  const { postId } = useParams();
  const navigate = useNavigate();

  return (
    <div>
      <h3 className='row justify-center mt-3 ml-1 mr-1 font-lg text-primary'>
        Are you sure you want to delete the post &quot;{post.title}&quot;?
      </h3>
      <Form
        className='display-f justify-center mt-3'
        method='post'
        action={'/posts/' + postId + '/delete'}
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

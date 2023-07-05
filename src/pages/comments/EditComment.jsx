import { useLoaderData, useParams, Form, useNavigate } from 'react-router-dom';

export default function EditComment() {
  const { postId, commentId } = useParams();
  const { comment } = useLoaderData();
  const navigate = useNavigate();

  return (
    <div className='container p-0'>
      <h3 className='row justify-center mt-3 font-lg text-primary'>
        Edit comment
      </h3>
      <Form
        className='row justify-center'
        method='post'
        action={'/posts/' + postId + '/comments/' + commentId + '/edit'}
      >
        <div className='col-12-xs col-9-md col-7-lg container'>
          <label className='row col-12-xs col-9-md col-7-lg'>Content</label>
          <textarea
            className='row col-12-xs font-md p-1'
            id='content'
            name='content'
            rows='2'
            defaultValue={comment.content}
          ></textarea>
        </div>
        <div className='mt-3 mb-3 col-12-xs col-9-md col-7-lg display-f justify-center'>
          <button className='btn-secondary text-white ml-1 mr-1' type='submit'>
            Submit
          </button>
          <button
            className='btn-gray text-white ml-1 mr-1'
            type='button'
            onClick={() => {
              navigate(-1);
            }}
          >
            Cancel
          </button>
        </div>
      </Form>
    </div>
  );
}

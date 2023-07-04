import { useRef, useEffect } from 'react';
import { Form, useNavigate, useParams } from 'react-router-dom';

export default function CreateComment() {
  const navigate = useNavigate();
  const { postId } = useParams();
  const contentInput = useRef(null);

  useEffect(() => {
    contentInput.current.focus();
  }, []);

  return (
    <div className='container p-0'>
      <h3 className='row justify-center mt-3 font-lg text-primary'>
        Create a new comment
      </h3>
      <Form
        className='row justify-center'
        method='post'
        action={'/posts/' + postId + '/comments/new'}
      >
        <div className='col-12-xs col-9-md col-7-lg container'>
          <label className='row col-12-xs col-9-md col-7-lg'>Content</label>
          <textarea
            className='row col-12-xs font-md p-1'
            name='content'
            id='content'
            rows='2'
            required
            ref={contentInput}
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

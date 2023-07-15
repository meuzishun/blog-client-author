import { useLoaderData, useParams, Form, useNavigate } from 'react-router-dom';

export default function EditPost() {
  const { post } = useLoaderData();
  const { postId } = useParams();
  const navigate = useNavigate();

  return (
    <div className='container'>
      <h3 className='row justify-center mt-3 font-lg text-primary'>
        Edit post
      </h3>
      <Form
        className='row justify-center'
        method='post'
        action={'/posts/' + postId + '/edit'}
      >
        <div className='col-12-xs col-9-md col-7-lg'>
          <label className='row mt-2'>Title</label>
          <input
            className='row container font-md p-1'
            defaultValue={post.title}
            name='title'
            id='title'
            required
          ></input>
        </div>
        <div className='col-12-xs col-9-md col-7-lg'>
          <label className='row mt-2'>Content</label>
          <textarea
            className='row container font-md p-1'
            defaultValue={post.content}
            name='content'
            id='content'
            rows='10'
            required
          ></textarea>
        </div>
        <div className='checkbox-container col-12-xs col-9-md col-7-lg justify-center mt-2'>
          <input
            defaultChecked={post.isPublished}
            className='display-n'
            name='publish'
            id='publish'
            type='checkbox'
          />
          <label className='ml-1 font-md' htmlFor='publish'>
            Publish
          </label>
        </div>
        <div className='container display-f justify-center mt-3 mb-3'>
          <button
            className='btn-primary font-md text-white ml-1 mr-1'
            type='submit'
          >
            Submit
          </button>
          <button
            className='btn-gray font-md text-white ml-1 mr-1'
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

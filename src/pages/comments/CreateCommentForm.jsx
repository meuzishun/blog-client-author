import { API_URI } from '../../api_uri';
import PropTypes from 'prop-types';
import { useRef, useEffect } from 'react';
import { useParams } from 'react-router-dom';

export default function CreateCommentForm({
  handleNewCommentButtonClick,
  getComments,
}) {
  const { postId } = useParams();
  const contentInput = useRef(null);

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    const submission = {
      content: e.target.elements.content.value,
    };

    await fetch(API_URI + '/posts/' + postId + '/comments', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: localStorage.getItem('token'),
      },
      body: JSON.stringify(submission),
    });

    await getComments();
    handleNewCommentButtonClick();
  };

  useEffect(() => {
    contentInput.current.focus();
  }, []);

  return (
    <div className='container p-0'>
      <h3 className='row justify-center mt-3 font-lg text-primary'>
        Create a new comment
      </h3>
      <form className='row justify-center' onSubmit={handleFormSubmit}>
        <input name='form-id' hidden defaultValue='createComment' />
        <div className='col-12-xs col-12-md col-12-lg container p-0'>
          <label htmlFor='content' className='row col-12-xs col-9-md col-7-lg'>
            Content
          </label>
          <textarea
            className='row col-12-xs font-md p-1'
            name='content'
            id='content'
            rows='2'
            required
            ref={contentInput}
          ></textarea>
        </div>
        <div className='mt-1 mb-1 col-12-xs col-9-md col-7-lg display-f justify-center'>
          <button
            className='btn-secondary text-white font-md ml-1 mr-1 pt-0 pb-0 pl-1 pr-1'
            type='submit'
          >
            Submit
          </button>
          <button
            className='btn-outlined-gray text-hover-white font-md ml-1 mr-1 pt-0 pb-0 pl-1 pr-1'
            type='button'
            onClick={handleNewCommentButtonClick}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}

CreateCommentForm.propTypes = {
  handleNewCommentButtonClick: PropTypes.func,
  getComments: PropTypes.func,
};

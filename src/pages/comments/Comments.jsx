import { API_URI } from '../../api_uri';
import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import CreateCommentForm from './CreateCommentForm';

export default function Comments() {
  const { postId } = useParams();
  const [comments, setComments] = useState([]);
  const [showNewCommentForm, setShowNewCommentForm] = useState(false);

  const handleNewCommentButtonClick = () => {
    setShowNewCommentForm(!showNewCommentForm);
  };

  const getComments = async () => {
    const res = await fetch(`${API_URI}/posts/${postId}/comments`, {
      headers: {
        Authorization: localStorage.getItem('token'),
      },
    });

    if (!res.ok) {
      alert(res.message);
    } else {
      const jsonData = await res.json();
      if (jsonData) {
        const comments = jsonData.comments;
        const sortedComments = comments.sort(
          (a, b) => Date.parse(b.timestamp) - Date.parse(a.timestamp)
        );
        setComments(sortedComments);
      }
    }
  };

  useEffect(() => {
    getComments();
  }, []);

  useEffect(() => {
    if (comments.length > 0) {
      const commentsStart = document.getElementById('comments-start');
      commentsStart.scrollIntoView();
    }
  }, [comments]);

  return (
    <div className='container'>
      {showNewCommentForm ? (
        <CreateCommentForm
          handleNewCommentButtonClick={handleNewCommentButtonClick}
          getComments={getComments}
        />
      ) : (
        <div className='display-f justify-center mb-3'>
          <button
            className='btn-secondary font-md text-white'
            onClick={handleNewCommentButtonClick}
          >
            Create Comment
          </button>
        </div>
      )}
      {comments.map((comment) => (
        <div
          className='row justify-space-between mt-2 mb-2 bg-primary-light-9 p-1 br-xs'
          key={comment._id}
        >
          <p className='col-6-md font-sm'>
            {comment.author.firstName} {comment.author.lastName}
            {' - '}
            <span className='font-xs'>
              {new Date(comment.timestamp).toLocaleString()}
            </span>
          </p>
          <div className='col-6-md row justify-flex-end'>
            <Link
              className='btn-outlined-primary text-primary text-hover-white pt-0 pb-0 pl-1 pr-1 ml-1 mr-1'
              to={`/posts/${postId}/comments/${comment._id}/edit`}
            >
              Edit
            </Link>
            <Link
              className='btn-outlined-red text-red text-hover-white pt-0 pb-0 pl-1 pr-1 ml-1 mr-1'
              to={`/posts/${postId}/comments/${comment._id}/delete`}
            >
              Delete
            </Link>
          </div>
          <p className='col-12-md row justify-flex-start'>{comment.content}</p>
        </div>
      ))}
    </div>
  );
}

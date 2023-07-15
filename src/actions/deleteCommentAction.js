import { API_URI } from '../api_uri';
import { redirect } from 'react-router-dom';

export const deleteCommentAction = async ({ params }) => {
  const { postId, commentId } = params;

  await fetch(API_URI + '/posts/' + postId + '/comments/' + commentId, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      Authorization: localStorage.getItem('token'),
    },
  });

  return redirect('/posts/' + postId);
};

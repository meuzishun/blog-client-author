import { API_URI } from '../api_uri';
import { redirect } from 'react-router-dom';

export const deletePostAction = async ({ params }) => {
  const { postId } = params;

  await fetch(API_URI + '/posts/' + postId, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      Authorization: localStorage.getItem('token'),
    },
  });

  return redirect('/posts');
};

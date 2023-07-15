import { API_URI } from '../api_uri';
import { redirect } from 'react-router-dom';

export const newCommentAction = async ({ request, params }) => {
  const data = await request.formData();
  const { postId } = params;

  const submission = {
    content: data.get('content'),
  };

  await fetch(API_URI + '/posts/' + postId + '/comments', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: localStorage.getItem('token'),
    },
    body: JSON.stringify(submission),
  });

  return redirect('/posts/' + postId);
};

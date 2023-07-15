import { API_URI } from '../api_uri';
import { redirect } from 'react-router-dom';

export const editPostAction = async ({ request, params }) => {
  const data = await request.formData();
  const { postId } = params;

  const submission = {
    title: data.get('title'),
    content: data.get('content'),
    isPublished: data.get('publish') === 'on',
  };

  await fetch(API_URI + '/posts/' + postId, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      Authorization: localStorage.getItem('token'),
    },
    body: JSON.stringify(submission),
  });

  return redirect('/posts/' + postId);
};

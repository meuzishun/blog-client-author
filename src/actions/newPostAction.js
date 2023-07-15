import { API_URI } from '../api_uri';
import { redirect } from 'react-router-dom';

export const newPostAction = async ({ request }) => {
  const data = await request.formData();

  const submission = {
    title: data.get('title'),
    content: data.get('content'),
    isPublished: data.get('publish') === 'on',
  };

  await fetch(API_URI + '/posts', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: localStorage.getItem('token'),
    },
    body: JSON.stringify(submission),
  });

  return redirect('/posts');
};

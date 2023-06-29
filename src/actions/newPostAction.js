const apiRoot = import.meta.env.VITE_API_ROOT;
import { redirect } from 'react-router-dom';

export const newPostAction = async ({ request }) => {
  const data = await request.formData();

  const submission = {
    title: data.get('title'),
    content: data.get('content'),
    isPublished: data.get('publish') === 'on',
  };

  // send post request
  const response = await fetch(apiRoot + '/posts', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: localStorage.getItem('token'),
    },
    body: JSON.stringify(submission),
  });

  console.log(response);

  // redirect the user
  return redirect('/posts');
};

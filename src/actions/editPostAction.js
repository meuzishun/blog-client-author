const apiRoot = import.meta.env.VITE_API_ROOT;
import { redirect } from 'react-router-dom';

export const editPostAction = async ({ request, params }) => {
  const data = await request.formData();
  const { postId } = params;
  console.log(postId);
  console.log(typeof postId);

  const submission = {
    title: data.get('title'),
    content: data.get('content'),
    isPublished: data.get('publish') === 'on',
  };

  console.log(submission);

  // send post request
  const response = await fetch(apiRoot + '/posts/' + postId, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      Authorization: localStorage.getItem('token'),
    },
    body: JSON.stringify(submission),
  });

  console.log(response);

  // redirect the user
  return redirect('/posts/' + postId);
};
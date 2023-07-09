const apiRoot = 'https://scary-train-deer.cyclic.app/';
import { redirect } from 'react-router-dom';

export const editPostAction = async ({ request, params }) => {
  const data = await request.formData();
  const { postId } = params;

  const submission = {
    title: data.get('title'),
    content: data.get('content'),
    isPublished: data.get('publish') === 'on',
  };

  await fetch(apiRoot + '/posts/' + postId, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      Authorization: localStorage.getItem('token'),
    },
    body: JSON.stringify(submission),
  });

  return redirect('/posts/' + postId);
};

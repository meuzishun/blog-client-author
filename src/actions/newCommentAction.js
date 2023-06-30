const apiRoot = import.meta.env.VITE_API_ROOT;
import { redirect } from 'react-router-dom';

export const newCommentAction = async ({ request, params }) => {
  const data = await request.formData();
  const { postId } = params;

  const submission = {
    content: data.get('content'),
  };

  await fetch(apiRoot + '/posts/' + postId + '/comments', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: localStorage.getItem('token'),
    },
    body: JSON.stringify(submission),
  });

  return redirect('/posts/' + postId + '/comments');
};

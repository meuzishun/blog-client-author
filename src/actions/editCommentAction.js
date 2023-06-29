const apiRoot = import.meta.env.VITE_API_ROOT;
import { redirect } from 'react-router-dom';

export const editCommentAction = async ({ request, params }) => {
  const data = await request.formData();
  const { postId, commentId } = params;

  const submission = {
    content: data.get('content'),
  };

  await fetch(apiRoot + '/posts/' + postId + '/comments/' + commentId, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      Authorization: localStorage.getItem('token'),
    },
    body: JSON.stringify(submission),
  });

  return redirect('/posts/' + postId + '/comments');
};

const apiRoot = import.meta.env.VITE_API_ROOT;
import { redirect } from 'react-router-dom';

export const deleteCommentAction = async ({ params }) => {
  const { postId, commentId } = params;

  await fetch(apiRoot + '/posts/' + postId + '/comments/' + commentId, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      Authorization: localStorage.getItem('token'),
    },
  });

  return redirect('/posts/' + postId + '/comments');
};

const apiRoot = import.meta.env.VITE_API_ROOT;
import { redirect } from 'react-router-dom';

export const deletePostAction = async ({ params }) => {
  const { postId } = params;

  await fetch(apiRoot + '/posts/' + postId, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      Authorization: localStorage.getItem('token'),
    },
  });

  return redirect('/posts');
};

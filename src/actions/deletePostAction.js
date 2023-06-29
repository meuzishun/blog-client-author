const apiRoot = import.meta.env.VITE_API_ROOT;
import { redirect } from 'react-router-dom';

export const deletePostAction = async ({ params }) => {
  const { postId } = params;

  // send post request
  const response = await fetch(apiRoot + '/posts/' + postId, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      Authorization: localStorage.getItem('token'),
    },
  });

  console.log(response);

  // redirect the user
  return redirect('/posts');
};

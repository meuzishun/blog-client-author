import { API_URI } from '../api_uri';

export const commentDetailsLoader = async ({ params }) => {
  const { postId, commentId } = params;

  const res = await fetch(
    API_URI + '/posts/' + postId + '/comments/' + commentId,
    {
      headers: {
        Authorization: localStorage.getItem('token'),
      },
    }
  );

  if (!res.ok) {
    throw Error('Could not fetch comment');
  }

  return res.json();
};

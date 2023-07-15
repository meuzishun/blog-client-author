import { API_URI } from '../api_uri';

export const commentsLoader = async ({ params }) => {
  const { postId } = params;

  const res = await fetch(API_URI + '/posts/' + postId + '/comments', {
    headers: {
      Authorization: localStorage.getItem('token'),
    },
  });

  if (!res.ok) {
    throw Error('Could not fetch comments');
  }

  const data = await res.json();

  return data;
};

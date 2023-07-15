import { API_URI } from '../api_uri';

export const postsLoader = async () => {
  const res = await fetch(API_URI + '/posts', {
    headers: {
      Authorization: localStorage.getItem('token'),
    },
  });

  if (!res.ok) {
    throw Error('Could not fetch posts');
  }

  return res.json();
};

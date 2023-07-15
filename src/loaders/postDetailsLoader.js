import { API_URI } from '../api_uri';

export const postDetailsLoader = async ({ params }) => {
  const { postId } = params;

  const res = await fetch(API_URI + '/posts/' + postId);

  if (!res.ok) {
    throw Error('Could not fetch post');
  }

  return res.json();
};

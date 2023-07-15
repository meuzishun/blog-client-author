import { API_URI } from '../api_uri';

export const togglePublication = async ({ request }) => {
  const formData = await request.formData();
  const postId = formData.get('post-id');
  const isPublished = formData.get('isPublished');

  const response = await fetch(API_URI + '/posts/' + postId, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      Authorization: localStorage.getItem('token'),
    },
    body: JSON.stringify({
      isPublished,
    }),
  });

  if (!response.ok) {
    console.error(response);
  }
  return null;
};

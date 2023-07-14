import { API_URI } from '../api_uri';

export const postActions = async ({ request, params }) => {
  const formData = await request.formData();
  const formId = formData.get('form-id');

  if (formId === 'publish') {
    console.log('Setting publish...');
    const isPublished = formData.get('isPublished');
    const { postId } = params;

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
  }

  console.log('Not finding a post action...');
  return null;
};

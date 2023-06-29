const apiRoot = import.meta.env.VITE_API_ROOT;

export const commentsLoader = async ({ params }) => {
  const { postId } = params;

  const res = await fetch(apiRoot + '/posts/' + postId + '/comments', {
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

const apiRoot = 'https://scary-train-deer.cyclic.app/';

export const commentDetailsLoader = async ({ params }) => {
  const { postId, commentId } = params;

  const res = await fetch(
    apiRoot + '/posts/' + postId + '/comments/' + commentId,
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

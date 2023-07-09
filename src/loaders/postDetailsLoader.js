const apiRoot = 'https://scary-train-deer.cyclic.app/';

export const postDetailsLoader = async ({ params }) => {
  const { postId } = params;

  const res = await fetch(apiRoot + '/posts/' + postId);

  if (!res.ok) {
    throw Error('Could not fetch post');
  }

  return res.json();
};

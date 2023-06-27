const apiRoot = import.meta.env.VITE_API_ROOT;

export const postDetailsLoader = async ({ params }) => {
  const { postId } = params;

  const res = await fetch(apiRoot + '/posts/' + postId);

  if (!res.ok) {
    throw Error('Could not fetch post');
  }

  return res.json();
};

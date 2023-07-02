const apiRoot = import.meta.env.VITE_API_ROOT;

export const postsLoader = async () => {
  const res = await fetch(apiRoot + '/posts', {
    headers: {
      Authorization: localStorage.getItem('token'),
    },
  });

  if (!res.ok) {
    throw Error('Could not fetch posts');
  }

  return res.json();
};

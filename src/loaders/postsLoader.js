const apiRoot = 'https://scary-train-deer.cyclic.app/';

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

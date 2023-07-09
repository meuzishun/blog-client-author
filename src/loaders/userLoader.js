const apiRoot = 'https://scary-train-deer.cyclic.app/';

export const userLoader = async () => {
  const token = localStorage.getItem('token');

  if (!token) {
    localStorage.clear();
    return false;
  }

  const response = await fetch(apiRoot + '/profile', {
    method: 'GET',
    headers: {
      Authorization: token,
    },
  });

  const data = await response.json();

  if (!data.user || !data.user.isAdmin) {
    localStorage.clear();
    return false;
  }

  const userString = JSON.stringify(data.user);
  localStorage.setItem('user', userString);
  return data.user;
};

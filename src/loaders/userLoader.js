import { API_URI } from '../api_uri';

export const userLoader = async () => {
  const token = localStorage.getItem('token');

  if (!token) {
    localStorage.clear();
    return false;
  }

  const response = await fetch(API_URI + '/profile', {
    method: 'GET',
    headers: {
      Authorization: token,
    },
  });

  if (!response.ok) {
    localStorage.clear();
    return false;
  }

  const data = await response.json();

  if (!data.user || !data.user.isAdmin) {
    localStorage.clear();
    return false;
  }

  const userString = JSON.stringify(data.user);
  localStorage.setItem('user', userString);
  return data.user;
};

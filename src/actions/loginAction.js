const apiRoot = import.meta.env.VITE_API_ROOT;
import { redirect } from 'react-router-dom';

export const loginAction = async ({ request }) => {
  const data = await request.formData();

  const submission = {
    email: data.get('email'),
    password: data.get('password'),
  };

  // send post request
  const response = await fetch(apiRoot + '/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(submission),
  });
  const json = await response.json();
  const userString = JSON.stringify(json.user);
  localStorage.setItem('token', json.jwt.token);
  localStorage.setItem('user', userString);

  if (submission.password.length < 3) {
    return {
      error: 'Password must be over 3 chars long',
    };
  }

  // redirect the user
  return redirect('/');
};

import { useRef, useEffect } from 'react';
import { Form, useActionData } from 'react-router-dom';

export default function Login() {
  const data = useActionData();
  const emailInput = useRef(null);
  const passwordInput = useRef(null);

  useEffect(() => {
    emailInput.current.focus();
  }, []);

  useEffect(() => {
    emailInput.current.value = '';
    passwordInput.current.value = '';
    emailInput.current.focus();
  });

  return (
    <div>
      <header>
        <h1>You&apos;re Gonna Make Me Blog</h1>
      </header>
      <h3>Login</h3>
      <Form method='post' action='/login'>
        <div>
          <label>Email</label>
          <input
            ref={emailInput}
            type='email'
            name='email'
            defaultValue=''
            required
          />
        </div>
        <div>
          <label>Password</label>
          <input
            ref={passwordInput}
            type='password'
            name='password'
            defaultValue=''
            required
          />
        </div>
        <button type='submit'>Submit</button>
        {data && data.error && <p>{data.error}</p>}
      </Form>
    </div>
  );
}

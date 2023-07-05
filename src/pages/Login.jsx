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
      <header className='navbar-primary justify-between text-white'>
        <h1 className='font-lg'>You&apos;re Gonna Make Me Blog</h1>
      </header>
      <Form className='form' method='post' action='/login'>
        <h3 className='mt-3 font-lg text-primary'>Admin Login</h3>
        <div className='input-container'>
          <label className='mt-2'>Email</label>
          <input
            className='font-md p-1'
            ref={emailInput}
            type='email'
            name='email'
            defaultValue=''
            required
          />
        </div>
        <div className='input-container'>
          <label className='mt-2'>Password</label>
          <input
            className='font-md p-1'
            ref={passwordInput}
            type='password'
            name='password'
            defaultValue=''
            required
          />
        </div>
        <button className='mt-3 btn-primary font-md text-white' type='submit'>
          Submit
        </button>
        {data && data.error && (
          <p className='display-f justify-center mt-3 font-md text-red-dark-3'>
            {data.error}
          </p>
        )}
      </Form>
    </div>
  );
}

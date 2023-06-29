import { Form, useActionData } from 'react-router-dom';

export default function Login() {
  const data = useActionData();

  return (
    <div>
      <h3>Login</h3>
      <Form method='post' action='/login'>
        <div>
          <label>Email</label>
          <input type='email' name='email' required />
        </div>
        <div>
          <label>Password</label>
          <input type='password' name='password' required />
        </div>
        <button type='submit'>Submit</button>
        {data && data.error && <p>{data.error}</p>}
      </Form>
    </div>
  );
}

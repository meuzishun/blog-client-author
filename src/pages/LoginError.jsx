import { Link, useRouteError } from 'react-router-dom';

export default function LoginError() {
  const error = useRouteError();

  return (
    <div>
      <h2>Error</h2>
      <p>{error.message}</p>
      <Link to='/login'>Try logging in again</Link>
    </div>
  );
}

import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div>
      <h2>Oops! Page not found!</h2>
      <p>Looks like there is no page at this url...</p>
      <p>
        Go to the <Link to='/'>Homepage</Link>.
      </p>
    </div>
  );
}

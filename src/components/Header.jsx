import { Link, useNavigate } from 'react-router-dom';

export default function Header() {
  const navigate = useNavigate();

  return (
    <header>
      <h1>You&apos;re Gonna Make Me Blog</h1>
      <nav>
        <Link to='/'>Home</Link>
        <br />
        <Link to='posts'>Posts</Link>
        <br />
        <Link to='posts/new'>New Post</Link>
        <br />
        <button
          onClick={() => {
            localStorage.clear();
            navigate('/login');
          }}
        >
          Logout
        </button>
      </nav>
      <hr />
    </header>
  );
}

import { Link, useNavigate } from 'react-router-dom';

export default function Header() {
  const navigate = useNavigate();

  return (
    <header className='navbar-primary justify-between text-white'>
      <h1 className='site-title'>You&apos;re Gonna Make Me Blog</h1>
      <nav className='display-f'>
        <Link className='ml-1 mr-1 text-hover-secondary' to='/'>
          Home
        </Link>
        <Link className='ml-1 mr-1 text-hover-secondary' to='posts'>
          Posts
        </Link>
        <Link className='ml-1 mr-1 text-hover-secondary' to='posts/new'>
          New Post
        </Link>
        <button
          className='nav-btn font-md text-white ml-1 mr-1 text-hover-secondary'
          onClick={() => {
            localStorage.clear();
            navigate('/login');
          }}
        >
          Logout
        </button>
      </nav>
    </header>
  );
}

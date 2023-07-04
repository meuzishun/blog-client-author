import { Link, useNavigate } from 'react-router-dom';

export default function Header() {
  const navigate = useNavigate();

  return (
    <header className='row justify-space-between bg-primary text-white'>
      <h1 className='col-6-lg col-12-md col-12-sm ml-1 mr-1'>
        You&apos;re Gonna Make Me Blog
      </h1>
      <nav className='col-3-xl col-4-lg col-5-md col-12-sm col-12-xs display-f justify-space-around'>
        <Link className='mt-1 mb-1 text-hover-secondary' to='/'>
          Home
        </Link>
        <Link className='mt-1 mb-1 text-hover-secondary' to='posts'>
          Posts
        </Link>
        <Link className='mt-1 mb-1 text-hover-secondary' to='posts/new'>
          New Post
        </Link>
        <button
          className='nav-btn font-md text-white mt-1 mb-1 text-hover-secondary'
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

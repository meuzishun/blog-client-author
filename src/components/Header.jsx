import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header>
      <h1>You&apos;re Gonna Make Me Blog</h1>
      <nav>
        <Link to='/'>Home</Link>
        <br />
        <Link to='posts'>Posts</Link>
        <br />
        <Link to='posts/new'>New Post</Link>
      </nav>
      <hr />
    </header>
  );
}

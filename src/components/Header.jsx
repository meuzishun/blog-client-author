import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header>
      <h1>Title</h1>
      <nav>
        <Link to='posts'>Posts</Link>
        <br />
        <Link to='posts.new'>Create a new Post</Link>
      </nav>
    </header>
  );
}

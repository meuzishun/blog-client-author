import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div>
      <h2>Homepage</h2>
      <br />
      <Link to='posts'>View Posts</Link>
      <br />
      <Link to='posts/new'>Create a New Post</Link>
    </div>
  );
}

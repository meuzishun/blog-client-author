import { Link } from 'react-router-dom';

export default function Posts() {
  return (
    <div>
      <Link to='1'>Post 1</Link>
      <br />
      <Link to='2'>Post 2</Link>
      <br />
      <Link to='3'>Post 3</Link>
      <br />
      <Link to='new'>Create Post</Link>
    </div>
  );
}

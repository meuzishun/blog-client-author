import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div>
      <h2 className='mt-3 mb-3 pl-2 pr-2 display-f justify-center text-primary font-xl'>
        Welcome to You&apos;re Gonna Make Me Blog
      </h2>
      <div className='display-f justify-center wrap'>
        <Link
          className='btn-outlined-secondary text-secondary text-hover-white font-lg m-2'
          to='posts'
        >
          View Posts
        </Link>
        <Link
          className='btn-outlined-secondary text-secondary text-hover-white font-lg m-2'
          to='posts/new'
        >
          Create a New Post
        </Link>
      </div>
    </div>
  );
}

import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className='container'>
      <h2 className='row justify-center mt-3 text-primary font-xl'>
        Oops! Page not found!
      </h2>
      <p className='row justify-center mt-3 font-lg'>
        Looks like there is no page at this url...
      </p>
      <p className='row justify-center mt-3 font-lg'>
        Go to the&nbsp;
        <Link className='text-primary text-hover-secondary' to='/'>
          Homepage
        </Link>
        .
      </p>
    </div>
  );
}

import { useLoaderData, Link } from 'react-router-dom';

export default function Comments() {
  const { comments } = useLoaderData();

  return (
    <div className='container'>
      {comments.map((comment) => (
        <div className='justify-space-between mt-2 mb-2' key={comment._id}>
          <Link
            className='text-hover-primary row col-12-sm'
            to={comment._id.toString()}
          >
            {comment.author.firstName} {comment.author.lastName}
            {' - '}
            {comment.content}
          </Link>
          <div className='row col-12-sm'>
            <Link
              className='btn-outlined-primary text-primary text-hover-white pt-0 pb-0 pl-1 pr-1 ml-1 mr-1'
              to={comment._id + '/edit'}
            >
              Edit
            </Link>
            <Link
              className='btn-outlined-red text-red text-hover-white pt-0 pb-0 pl-1 pr-1 ml-1 mr-1'
              to={comment._id + '/delete'}
            >
              Delete
            </Link>
          </div>
        </div>
      ))}
      <div className='row justify-center mt-3 mb-3'>
        <Link className='btn-secondary font-md text-white' to='new'>
          Create Comment
        </Link>
      </div>
    </div>
  );
}

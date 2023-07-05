import { useLoaderData, Link } from 'react-router-dom';

export default function CommentDetails() {
  const { comment } = useLoaderData();

  return (
    <div>
      <h3 className='row justify-center mt-3 ml-1 mr-1 font-lg text-primary'>
        Comment Details
      </h3>
      <p className='row justify-center mt-1 ml-1 mr-1 font-md text-primary'>
        {comment.author.firstName} {comment.author.lastName} - &quot;
        {comment.content}&quot;
      </p>
      <div className='display-f justify-center mt-3 mb-3'>
        <Link
          className='btn-outlined-gray text-gray text-hover-white font-md ml-1 mr-1'
          to='edit'
        >
          Edit Comment
        </Link>
        <Link
          className='btn-outlined-red text-red text-hover-white font-md ml-1 mr-1'
          to='delete'
        >
          Delete Comment
        </Link>
      </div>
    </div>
  );
}

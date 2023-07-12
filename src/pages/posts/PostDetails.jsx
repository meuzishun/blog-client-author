import { useLoaderData, Link, useFetcher } from 'react-router-dom';

export default function PostDetails() {
  const { post } = useLoaderData();
  const fetcher = useFetcher();

  let isPublished = post.isPublished;
  if (fetcher.formData && fetcher.formData.get('post-id') === post._id) {
    isPublished = fetcher.formData.get('isPublished') === 'true';
  }

  return (
    <div className='container'>
      <h3 className='row mt-3 mb-2 text-primary font-xl'>{post.title} </h3>
      <p className='row mb-3 font-md'>{post.content}</p>
      <div className='display-f justify-center mb-3'>
        <Link
          className='btn-outlined-primary text-primary text-hover-white ml-1 mr-1'
          to='comments'
        >
          View Comments
        </Link>
      </div>
      <div className='display-f justify-center mb-4'>
        <Link
          className='btn-outlined-primary text-primary text-hover-white ml-1 mr-1'
          to='edit'
        >
          Edit Post
        </Link>
        <Link
          className='btn-outlined-red text-red text-hover-white ml-1 mr-1'
          to='delete'
        >
          Delete Post
        </Link>
        <fetcher.Form method='post'>
          <input name='post-id' hidden defaultValue={post._id} />
          <button
            className='btn-outlined-secondary text-secondary text-hover-white font-md ml-1 mr-1'
            name='isPublished'
            value={isPublished ? 'false' : 'true'}
          >
            {isPublished ? 'Unpublish' : 'Publish'} Post
          </button>
        </fetcher.Form>
      </div>
    </div>
  );
}

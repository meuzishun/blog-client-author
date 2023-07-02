import { useLoaderData, Link } from 'react-router-dom';

export default function Posts() {
  const { posts } = useLoaderData();

  return (
    <div>
      {posts.map((post) => (
        <div key={post._id}>
          <Link to={post._id.toString()}>
            <p>
              {post.title}{' '}
              <span>({post.isPublished ? 'Published' : 'unpublished'})</span>
            </p>
          </Link>
          <br />
        </div>
      ))}
      <Link to='new'>Create Post</Link>
    </div>
  );
}

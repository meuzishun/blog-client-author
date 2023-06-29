import { useLoaderData, useParams, Form, useNavigate } from 'react-router-dom';

export default function PostEdit() {
  const { post } = useLoaderData();
  const { postId } = useParams();
  const navigate = useNavigate();

  return (
    <div>
      <h3>Edit post with ID: {post.id}</h3>
      <Form method='post' action={'/posts/' + postId + '/edit'}>
        <div>
          <label>Title</label>
          <input
            defaultValue={post.title}
            name='title'
            id='title'
            required
          ></input>
        </div>
        <div>
          <label>Content</label>
          <textarea
            defaultValue={post.content}
            name='content'
            id='content'
            required
          ></textarea>
        </div>
        <div>
          <label>Publish</label>
          <input
            defaultChecked={post.isPublished}
            name='publish'
            id='publish'
            type='checkbox'
          />
        </div>
        <button type='submit'>Submit</button>
        <button
          type='button'
          onClick={() => {
            navigate(-1);
          }}
        >
          Cancel
        </button>
      </Form>
    </div>
  );
}

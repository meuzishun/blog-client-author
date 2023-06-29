// import { useState, useEffect } from 'react';
import { useLoaderData, useParams, Form } from 'react-router-dom';

export default function PostEdit() {
  const { post } = useLoaderData();
  const { postId } = useParams();
  console.log(post);

  // const [title, setTitle] = useState(null);
  // const [content, setContent] = useState(null);

  // useEffect(() => {
  //   setTitle(post.title);
  // }, [post]);

  // useEffect(() => {
  //   setContent(post.content);
  // }, [post]);

  return (
    <div>
      <h3>Edit post with ID: {post.id}</h3>
      <Form method='post' action={'/posts/' + postId + '/edit'}>
        <div>
          <label>Title</label>
          <input
            // defaultValue={title}
            // onChange={(e) => setTitle(e.target.value)}
            defaultValue={post.title}
            name='title'
            id='title'
            required
          ></input>
        </div>
        <div>
          <label>Content</label>
          <textarea
            // defaultValue={content}
            // onChange={(e) => setContent(e.target.value)}
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
        <button type='button'>Cancel</button>
      </Form>
    </div>
  );
}

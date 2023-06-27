import { useState, useEffect } from 'react';
import { useLoaderData } from 'react-router-dom';

export default function PostEdit() {
  const post = useLoaderData();

  const [title, setTitle] = useState(null);
  const [content, setContent] = useState(null);

  useEffect(() => {
    setTitle(post.title);
  }, [post]);

  useEffect(() => {
    setContent(post.body);
  }, [post]);

  return (
    <div>
      <h3>Edit post with ID: {post.id}</h3>
      <form>
        <div>
          <label>Title</label>
          <input
            defaultValue={title}
            onChange={(e) => setTitle(e.target.value)}
          ></input>
        </div>
        <div>
          <label>Content</label>
          <textarea
            defaultValue={content}
            onChange={(e) => setContent(e.target.value)}
          ></textarea>
        </div>
        <button type='submit'>Submit</button>
        <button type='button'>Cancel</button>
      </form>
    </div>
  );
}

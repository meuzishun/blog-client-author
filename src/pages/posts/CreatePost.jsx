import { Form } from 'react-router-dom';

export default function CreatePost() {
  return (
    <div>
      <h3>Create a new post</h3>
      <Form method='post' action='/posts/new'>
        <div>
          <label>Title</label>
          <input type='text' name='title' id='title' required></input>
        </div>
        <div>
          <label>Content</label>
          <textarea name='content' id='content' required></textarea>
        </div>
        <div>
          <label>Publish</label>
          <input name='publish' id='publish' type='checkbox' />
        </div>
        <button type='submit'>Submit</button>
        <button type='button'>Cancel</button>
      </Form>
    </div>
  );
}

import { useParams } from 'react-router-dom';

export default function PostEdit() {
  const { postId } = useParams();

  return (
    <div>
      <h3>Edit post with ID: {postId}</h3>
      <form>
        <div>
          <label>Title</label>
          <input></input>
        </div>
        <div>
          <label>Content</label>
          <textarea></textarea>
        </div>
        <button type='submit'>Submit</button>
        <button type='button'>Cancel</button>
      </form>
    </div>
  );
}

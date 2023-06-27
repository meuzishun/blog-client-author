export default function CreatePost() {
  return (
    <div>
      <h3>Create a new post</h3>
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

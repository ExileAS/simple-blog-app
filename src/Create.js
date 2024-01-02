import { useState } from "react";
import { useHistory } from "react-router-dom";
const Create = () => {
  const [isPending, setIsPending] = useState(false);
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("mario");
  const [body, setBody] = useState("");
  const history = useHistory();
  const [time, setTime] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsPending(true);
    setTimeout(() => {
      const blog = { title, body, author, time };

      fetch("http://localhost:4544/blogs", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(blog),
      }).then((result) => {
        console.log("new blog added");
        setIsPending(false);
        setTitle("");
        setBody("");
        setTime("");
        history.push("/");
      });
    }, 1500);
  };

  return (
    <div className="create">
      <h2>Add a New Blog</h2>
      <form onSubmit={handleSubmit}>
        <label>Blog title:</label>
        <input
          type="text"
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label>Blog Body:</label>
        <textarea
          required
          value={body}
          onChange={(e) => setBody(e.target.value)}
        ></textarea>
        <label>Blog date:</label>
        <textarea
          required
          value={time}
          onChange={(e) => setTime(e.target.value)}
        ></textarea>
        <label>Blog author:</label>
        <select value={author} onChange={(e) => setAuthor(e.target.value)}>
          <option value="mario">mario</option>
          <option value="yoshi">yoshi</option>
        </select>
        {!isPending && <button>Add Blog</button>}
        {isPending && <button disabled>Adding blog...</button>}
        <p>{title}</p>
        <p>{body}</p>
        <p>{author}</p>
      </form>
    </div>
  );
};

export default Create;

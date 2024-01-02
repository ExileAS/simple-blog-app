import { useHistory, useParams } from "react-router-dom";
import useFetch from "./useFetch";

const BlogDetails = () => {
  const { id } = useParams();
  const {
    data: blog,
    isPending,
    error,
  } = useFetch("http://localhost:4544/blogs/" + id);
  const history = useHistory();

  const handleDelete = (e) => {
    fetch("http://localhost:4544/blogs/" + id, {
      method: "DELETE",
    }).then(() => history.push("/"));
  };

  return (
    <div className="blog-details">
      {isPending && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {blog && (
        <article>
          <h2>{blog.title}</h2>
          <p>written by {blog.author}</p>
          <div>{blog.body}</div>
          <h3>sceduled {blog.date}</h3>
        </article>
      )}
      {!error && !isPending && (
        <button onClick={handleDelete}>Delete Blog</button>
      )}
    </div>
  );
};

export default BlogDetails;

import BlogList from "./BlogList";
import useFetch from "./useFetch";
import "transition-style";

const Home = () => {
  const {
    error,
    data: blogs,
    isPending,
  } = useFetch("http://localhost:4544/blogs");

  return (
    <div className="home">
      {error && <div> {error} </div>}
      {isPending && <div>Loading... </div>}
      {blogs && <BlogList blogs={blogs} title="All Blogs" />}
    </div>
  );
};

export default Home;

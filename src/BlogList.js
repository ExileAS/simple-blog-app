import SearchBar from "./searchBar";
const BlogList = ({ title, blogs }) => {
  return (
    <div className="blog-list">
      <h2>{title}</h2>
      <SearchBar data={blogs} />
    </div>
  );
};

export default BlogList;

import useSearch from "./useSearch";
import { Link } from "react-router-dom";
const SearchBar = ({ data }) => {
  const { filteredData, handleSearch } = useSearch(data);

  return (
    <div className="search-bar">
      <label className="search-label">Search Blogs</label>
      <textarea onChange={handleSearch}></textarea>
      {filteredData.length > 0 ? (
        filteredData.map((item) => {
          return (
            <div className="blog-preview" key={item.id}>
              <Link to={`/blogs/${item.id}`}>
                <h3>{item.title}</h3>
                <p>written by {item.author}</p>
              </Link>
            </div>
          );
        })
      ) : (
        <div>
          <h4>Sorry</h4>
          <p>didn't find blogs matching your search</p>
        </div>
      )}
    </div>
  );
};

export default SearchBar;

import { useState } from "react";

const useSearch = (data) => {
  const [search, setSearch] = useState("");

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const filteredData = data.filter(
    (item) =>
      search === "" || item.title.toLowerCase().includes(search.toLowerCase())
  );

  return { filteredData, handleSearch };
};

export default useSearch;

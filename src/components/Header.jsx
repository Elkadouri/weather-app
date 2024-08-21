import { useContext, useState } from "react";
import { SearchContext } from "../App";

export default function Header() {
  const [, setClick] = useContext(SearchContext);
  const [search, setSearch] = useState('');

  const handleSearch = () => {
    if (search.trim()) {
      setTimeout(() => {
        setClick(search);
      }, 1000);
    }
  };

  return (
    <header className="header">
      <input
        type="search"
        autoComplete="off"
        name="search"
        value={search}
        required
        placeholder="Enter Your City ..."
        onChange={(e) => setSearch(e.target.value)}
      />
      <button disabled={!search.trim()} onClick={handleSearch}>
        Get
      </button>
    </header>
  );
}

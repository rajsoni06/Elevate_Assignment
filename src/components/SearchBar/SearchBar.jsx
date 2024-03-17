import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import "./SearchBar.css";

export const SearchBar = ({ handleSearch, searchTerm, setSearchTerm }) => {
  return (
    <div className="searchbar-wrapper">
      <input
        className="searchbar"
        type="text"
        placeholder="Search this blog"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <span
        className="search-icon"
        onClick={() => {
          handleSearch();
        }}
      >
        <FontAwesomeIcon className="search-fa-icon" icon={faSearch} />
      </span>
    </div>
  );
};

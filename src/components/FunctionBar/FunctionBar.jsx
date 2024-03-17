import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { CategoryFilter } from "../CategoryFilter/CategoryFilter";
import { HamburgerButton } from "../HamburgerButton/HamburgerButton";
import { LanguageFilter } from "../LanguageFilter/LanguageFilter";
import { SearchBar } from "../SearchBar/SearchBar";
import { faCartShopping, faUser } from "@fortawesome/free-solid-svg-icons";
import "./FunctionBar.css";

export const FunctionBar = ({
  setOpenSideBar,
  selectedCategory,
  handleChange,
  categories,
  searchTerm,
  setSearchTerm,
  handleSearch
}) => {
  return (
    <div className="function-bar">
      <HamburgerButton setOpenSideBar={setOpenSideBar} />
      <CategoryFilter
        selectedCategory={selectedCategory}
        handleChange={handleChange}
        categories={categories}
      />
      <SearchBar
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        handleSearch={handleSearch}
      />
      <LanguageFilter />
      <div className="btn-wrapper">
        <FontAwesomeIcon className="icon-style" icon={faCartShopping} />
        <button className="btn">Cart</button>
        <FontAwesomeIcon className="icon-style" icon={faUser} />
        <button className="btn">Profile</button>
      </div>
    </div>
  );
};

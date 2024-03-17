import "./LanguageFilter.css";

export const LanguageFilter = () => {
  return (
    <div className="language-filter-wrapper">
      <select className="lang-filter-options">
        <option className="lang-filter-option" value="en">
          English
        </option>
        <option value="fr" className="lang-filter-option">
          French
        </option>
      </select>
    </div>
  );
};

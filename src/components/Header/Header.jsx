import "./Header.css";

export const Header = () => {
  return (
    <div className="header-main-wrapper">
      <div className="header-links">
        <a className="header-link" href="/">
          Best Sellers
        </a>
        <a className="header-link" href="/">
          Gift Ideas
        </a>
        <a className="header-link" href="/">
          New Releases
        </a>
        <a className="header-link" href="/">
          Today's Deals
        </a>
        <a className="header-link" href="/">
          Customer Service
        </a>
      </div>
    </div>
  );
};

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import "./SideBar.css";

export const SideBar = ({ setOpenSideBar, openSideBar }) => {
  return (
    <aside className={openSideBar ? "sidebar sidebar-open" : "sidebar"}>
      <FontAwesomeIcon
        className="cross-icon"
        icon={faXmark}
        onClick={() => setOpenSideBar(false)}
      />
      <ul className="sidebar-list-items">
        <li className="list-item">
          <a href="#home" className="list-item-link">
            Home
          </a>
        </li>
        <li className="list-item">
          <a href="#products" className="list-item-link">
            Products
          </a>
        </li>
      </ul>
    </aside>
  );
};

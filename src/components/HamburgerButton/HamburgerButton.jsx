import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import "./HamburgerButton.css";

export const HamburgerButton = ({ setOpenSideBar }) => {
  return (
    <div onClick={() => setOpenSideBar(true)}>
      <FontAwesomeIcon className="hamburger-icon" icon={faBars} />
    </div>
  );
};

import { useState, useEffect } from "react";
import { IoMenuOutline } from "react-icons/io5";

import useLayoutAreaContext from "../../hooks/useLayoutAreaContext";

import styles from "../../styles/Navigation.module.css";

const NavMenu = () => {
  const { changeView } = useLayoutAreaContext();

  const [menuOpen, setMenuOpen] = useState(false);

  // Clicking on the icon will trigger a function (in the CameraLayout element)
  // that will trigger the "closing" animation and then switch pages
  const handlePageSwitching = (location, idx) => {
    setMenuOpen(false);
    // Automatically bypasses previous animation
    changeView(location, idx, true);
  };

  useEffect(() => {
    const menuClick = (e) => {
      if (!e.target.closest(".nav")) setMenuOpen(false);
    };
    window.addEventListener("click", menuClick);

    return () => {
      window.removeEventListener("click", menuClick);
    };
  }, []);

  return (
    <div className={`nav ${styles.navMenuContainer}`}>
      <ul className={styles.menuItems} data-visible={menuOpen}>
        <li onClick={() => handlePageSwitching("/")}>Home</li>
        <li onClick={() => handlePageSwitching("/about")}>About</li>
        <li onClick={() => handlePageSwitching(null, 2)}>Projects</li>
        <li onClick={() => handlePageSwitching("/blog/preview")}>Blog</li>
        <li onClick={() => handlePageSwitching("/contact")}>Contact</li>
      </ul>
      <p onClick={() => setMenuOpen((prev) => !prev)}>
        <IoMenuOutline /> <span>Menu</span>
      </p>
    </div>
  );
};

export default NavMenu;

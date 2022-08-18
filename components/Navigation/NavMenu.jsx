import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { IoMenuOutline } from "react-icons/io5";

import styles from "../../styles/Navigation.module.css";

const NavMenu = ({ handleNavigation }) => {
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);

  // Clicking on the icon will trigger a function (in the CameraLayout element)
  // that will trigger the "closing" animation and then switch pages
  const handlePageSwitching = () => {
    setMenuOpen(false);
    handleNavigation();
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
        <li onClick={handlePageSwitching}>Home</li>
        <li onClick={handlePageSwitching}>About</li>
        <li onClick={handlePageSwitching}>Projects</li>
        <li onClick={handlePageSwitching}>Blog</li>
        <li onClick={handlePageSwitching}>Contact</li>
      </ul>
      <p onClick={() => setMenuOpen((prev) => !prev)}>
        <IoMenuOutline /> <span>Menu</span>
      </p>
    </div>
  );
};

export default NavMenu;

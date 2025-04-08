import { useState } from "react";
import styles from "./EcomNav.module.css";

const EcomNav = ({ toggleCart, cartCount, isCartPage, goBackHome }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className={styles.header}>
      <nav className={styles.navbar}>
        <div className={styles.logo}>Watches</div>

        {/* Show Back Button Only in MyCard Page */}
        {isCartPage ? (
            <button className={styles.backButton} onClick={toggleCart}>
            🔙 Back Home
          </button>
        ) : (
          <>
            {/* Hamburger Menu (For Mobile) */}
            <div className={styles.hamburger} onClick={toggleMenu}>
              ☰
            </div>

            {/* Navigation Links - Toggle Based on State */}
            <ul className={`${styles.navLinks} ${menuOpen ? styles.showMenu : ""}`}>
              <li><a href="#hero" onClick={toggleMenu}>Home</a></li>
              <li><a href="#mycollect" onClick={toggleMenu}>Products</a></li>
              <li><a href="#aboutus" onClick={toggleMenu}>About</a></li>
              <li><a href="#contact" onClick={toggleMenu}>Contact</a></li>
            </ul>

            {/* Cart Icon */}
            <div className={styles.cartIcon} onClick={toggleCart}>
              🛒 <span className={styles.cartCount}>{cartCount}</span>
            </div>
          </>
        )}
      </nav>
    </header>
  );
};

export default EcomNav;

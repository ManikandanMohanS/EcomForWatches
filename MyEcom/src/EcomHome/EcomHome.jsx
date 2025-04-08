import React from "react";
import styles from "./EcomHome.module.css"; // Using module CSS for scoped styles

const EcomHome = () => {
  return (
    <div>
      {/* Hero Section */}
      <section id="hero" className={styles.hero}>
        <div className={styles.heroOverlay}>
          <h1>Luxury Timepieces</h1>
          <p>Discover our collection of premium watches</p>
        </div>
      </section>
    </div>
  );
};

export default EcomHome;

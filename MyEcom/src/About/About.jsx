import React from "react";
import styles from "./About.module.css";

const About = () => {
  return (
    <section className={styles.aboutSection} id="aboutus">
      <div className={styles.aboutContent}>
        <h2>About Manikandan Watches</h2>
        <p>
          Founded in 2020, Manikandan Watches has become synonymous with luxury,
          precision, and elegance. Our commitment to excellence drives us to
          source the finest timepieces from around the world.
        </p>

        {/* Feature Boxes */}
        <div className={styles.aboutFeatures}>
          <div className={styles.feature}>
            <h3>Quality Assurance</h3>
            <p>
              Every watch undergoes rigorous quality checks to ensure
              perfection.
            </p>
          </div>
          <div className={styles.feature}>
            <h3>Expert Craftsmanship</h3>
            <p>
              Our collection features watches crafted by the world's finest
              watchmakers.
            </p>
          </div>
          <div className={styles.feature}>
            <h3>24/7 Customer Support</h3>
            <p>
              Dedicated support team available 24/7 to assist with your queries.
            </p>
          </div>
        </div>
          </div>

        {/* Google Map Section */}
        <div className={styles.mapContainer}>
          <h3>📍 Our Locations in Tamil Nadu</h3>
          <iframe
            src="https://www.google.com/maps/d/u/0/embed?mid=1Zhp4xH8vG65fhWjeGTfqUhLHmmR7sBc&ehbc=2E312F&noprof=1"
            // width="90%"
            // height="600"
            className={styles.map}
            title="Google Map of Our Locations"
          ></iframe>
        </div>
    </section>
  );
};

export default About;

import React from "react";
import styles from "../styles/FAQ.module.scss";
import { Accordion } from "./Accordion";

const FAQ = () => {
  let styleFAQ = styles.container_FAQ + " container";

  return (
    <section className={styles.FAQ}>
      <div className={styleFAQ}>
        <div className={styles.grow}>
          <div
            className={styles.block_started}
            data-aos="fade-right"
            data-aos-duration="3000"
          >
            <h1>Ready to Get started?</h1>
            <p>
              When pattern is mentioned in interior design, it is easy to asso-
              ciate it with a geometric patterned wallpaper or colourful prints
              on interior fabrics.
            </p>
            <a href="/contact">CONTACT US</a>
          </div>
          <div
            className={styles.block_accordion}
            data-aos="fade-left"
            data-aos-duration="3000"
          >
            <Accordion />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;

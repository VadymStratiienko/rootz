import React from "react";
import styles from "../styles/Footer.module.scss";
import twitter from "../Assets/img/twitter.svg";
import fb from "../Assets/img/fb.svg";
import lin from "../Assets/img/in.svg";
import { Link } from "react-router-dom";

const Footer = () => {
  let stylesFooter = styles.container_footer + " container";

  return (
    <footer>
      <div className={stylesFooter}>
        <div className={styles.grow}>
          <div className={styles.row_left}>
            <div>
              <h1>CONTACTS</h1>
              <p>
                2019 Rootz Foundation.
              
                Allrights reserved
              </p>
            </div>
          </div>
          <div className={styles.row_center}>
            <div className={styles.col_center}>
              <h3>Headquarters</h3>
              <p>
                1234 Taliban
                <br />
                Los Angeles, La 1234567
                <br />
                <a href="tel">(123) 456-7890</a>
              </p>
            </div>
          </div>
          <div className={styles.row_right}>
            <div className={styles.col_social}>
              <h3>Social media</h3>
              <div className={styles.social}>
                <Link to="#" className={styles.block_icon}>
                  <img src={twitter} alt="" />
                </Link>
                <Link to="#" className={styles.block_icon}>
                  <img src={fb} alt="" />
                </Link>
                <Link to="#" className={styles.block_icon}>
                  <img src={lin} alt="" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

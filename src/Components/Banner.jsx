import React from "react";
import styles from "../styles/Banner.module.scss";
import Headline from "../Assets/img/Headline.png";
import Parrot from "../Assets/img/Parrot.svg";
import Geo from "../Assets/img/geo.svg";
import card from "../Assets/img/card.svg";

const Banner = () => {
  let StyledBanner = styles.container_banner + " container";
  return (
    <section className={styles.hero}>
      <div className={StyledBanner}>
        <div className={styles.grow}>
          <div
            className={styles.block_headline}
            data-aos="fade-right"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
          >
            <img src={Headline} alt="" className={styles.headline_img} />
            <div className={styles.block_text}>
              <p>
                The scale of the challenges facing our planet can seem daunting,
                but we can all do something.
              </p>
              <div className={styles.block_form}>
                <form className={styles.form_search}>
                  <input type="text" placeholder="Find the place to help" />
                  <img src={Geo} alt="" className={styles.geo_icon} />
                  <button type="submit" className={styles.btn_search}>
                    SEARCH
                  </button>
                </form>
              </div>
            </div>
          </div>
          <div
            className={styles.block_parrot}
            data-aos="fade-left"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
          >
            <img src={Parrot} alt="" />
            <div className={styles.card}>
              <img src={card} alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;

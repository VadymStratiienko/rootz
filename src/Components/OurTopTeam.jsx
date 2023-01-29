import React from "react";
import styles from "../styles/OurTopTeam.module.scss";
import photo_1 from "../Assets/img/img 1.png";
import photo_2 from "../Assets/img/img 2.png";
import photo_3 from "../Assets/img/img 3.png";
import line_1 from "../Assets/img/line1.svg";
import line_2 from "../Assets/img/line2.svg";

const OurTopTeam = () => {
  let TopTeamStyle = styles.container_topTeam + " container";

  return (
    <section className={styles.team}>
      <div
        className={styles.header_section}
        data-aos="fade-up"
        data-aos-duration="2500"
      >
        <h1>Our top team</h1>
        <p>
          Learn more about how you can save <br />
          our planet&apos;s nature.
        </p>
      </div>
      <div className={TopTeamStyle}>
        <div className={styles.wrapper_team}>
          <div
            className={styles.item}
            data-aos="zoom-in"
            data-aos-duration="3000"
          >
            <img src={photo_1} alt="" />
          </div>
          <img
            src={line_1}
            alt=""
            className={styles.line_img_1}
            data-aos="zoom-in"
            data-aos-duration="3000"
          />
          <div
            className={styles.item}
            data-aos="zoom-in"
            data-aos-duration="3000"
          >
            <img src={photo_2} alt="" />
          </div>
          <img
            src={line_2}
            alt=""
            className={styles.line_img_2}
            data-aos="zoom-in"
            data-aos-duration="3000"
          />
          <div
            className={styles.item}
            data-aos="zoom-in"
            data-aos-duration="3000"
          >
            <img src={photo_3} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurTopTeam;

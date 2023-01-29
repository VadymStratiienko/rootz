import React from "react";
import styles from "../styles/Form.module.scss";
import vector_form_1 from "../Assets/img/vector-form-1.svg";
import vector_form_2 from "../Assets/img/vector-form-2.svg";

const Form = () => {
  let formStyles = styles.container_form + " container";

  return (
    <section>
      <div className={formStyles} data-aos="zoom-in" data-aos-duration="2000">
        <div className={styles.wrapper}>
          <div className={styles.grow}>
            <div
              className={styles.block_text}
              data-aos="zoom-in-right"
              data-aos-duration="3000"
            >
              <h1>Get started today!</h1>
              <p>
                Learn more about how you can save our planet&apos;s nature. From
                smart consumption to switching to renewable energy, each of us
                can do our part to save the planet.{" "}
              </p>
            </div>
            <div
              className={styles.block_form}
              data-aos="zoom-in-left"
              data-aos-duration="3000"
            >
              <img src={vector_form_1} alt="" className={styles.vector_b} />
              <img src={vector_form_2} alt="" className={styles.vector_l} />
              <h1>Log In</h1>
              <form>
                <input type="text" placeholder="Name" />
                <input type="email" placeholder="Email" />
                <button type="submit">BOOK A DEMO</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Form;

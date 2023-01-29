import React, { useState } from "react";
import styles from "../styles/FAQ.module.scss";
import plus from "../Assets/img/plus.svg";
import mines from "../Assets/img/mines.svg";
import { data } from "../data/data";

export const Accordion = () => {;
  const [accordion, setActiveAccordion] = useState(0);

  function toggleAccordion(index) {
    if (index === accordion) {
      setActiveAccordion(-1);
      return;
    }
    setActiveAccordion(index);
  }

  return (
    <>
      {data.map((item, index) => {
        return (
          <div
            className={styles.accordion_container}
            key={index}
            onClick={() => toggleAccordion(index)}
          >
          <div className={styles.column_container}>
            <div className={styles.column_text}>
              <h3 className={accordion === index ? styles.active : ""}> {item.question}</h3>
              </div>
              <div className={styles.expendable_button}>
                {accordion === index ? (
                  <img src={plus} alt="" />
                ) : (
                  <img src={mines} alt="" />
                )}
              </div>
              </div>
              <div className={styles.text_container}>
                <p
                  className={
                    accordion === index ? styles.active : styles.inactive
                  }
                >
                  {item.answer}
                </p>
              </div>
           
            <div className={styles.underline}></div>
          </div>
        
        );
      })}
    </>
  );
};

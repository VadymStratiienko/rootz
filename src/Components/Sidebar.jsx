import React, { useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import flower from "../Assets/img/Vector.svg";
import flower_2 from "../Assets/img/Vector_2.svg";
import flower_3 from "../Assets/img/Vector_3.svg";

import styles from "../styles/Sidebar.module.scss";

const Sidebar = ({ isOpen }) => {
  let routes = [
    { title: "Home", link: "/" },
    { title: "Our mission", link: "our-mission" },
    { title: "Places", link: "places" },
    { title: "Team", link: "team" },
  ];

  let headerStyle = styles.container_header + " container";
  
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "visible";
    }
  }, [isOpen]);

  return (
    <nav className={isOpen ? styles.navbar_active : styles.navbar_inactive}>
      <div className={headerStyle}>
        <Link to="/" className={styles.logo}>
          <img src={flower_3} alt="" className={styles.flower_3} />
          <img src={flower_2} alt="" className={styles.flower_2} />

          <img src={flower} alt="" className={styles.flower} />
          <h1 className={styles.logo_title}>Rootz</h1>
        </Link>
      </div>
      <ul>
        {routes.map((item, index) => {
          return (
            <li key={index}>
              <NavLink
                to={item.link}
                className={styles.header_link}
                style={({ isActive }) => ({
                  fontWeight: isActive ? 700 : 400,
                })}
              >
                {item.title}
              </NavLink>
            </li>
          );
        })}
      </ul>
      <Link to="/apply" className={styles.btn_apply}>
        Apply
      </Link>
    </nav>
  );
};

export default Sidebar;

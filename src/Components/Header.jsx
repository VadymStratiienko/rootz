import { useState } from "react";
import styles from "../styles/Header.module.scss";
import flower from "../Assets/img/Vector.svg";
import flower_2 from "../Assets/img/Vector_2.svg";
import flower_3 from "../Assets/img/Vector_3.svg";
import flower_4 from "../Assets/img/Vector_4.svg";
import flower_5 from "../Assets/img/Vector_5.svg";
import burger from "../Assets/img/burger.svg";
import close from "../Assets/img/close.svg";
import Sidebar from "./Sidebar";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  let routes = [
    { title: "Home", link: "/" },
    { title: "Our mission", link: "our-mission" },
    { title: "Places", link: "places" },
    { title: "Team", link: "team" },
  ];

  let headerStyle = styles.container_header + " container";

  return (
    <header className={styles.header}>
      <div className={headerStyle}>
        <Link to="/" className={styles.logo}>
          <img src={flower_3} alt="" className={styles.flower_3} />
          <img src={flower_2} alt="" className={styles.flower_2} />
          <img src={flower_5} alt="" className={styles.flower_5} />
          <img src={flower_4} alt="" className={styles.flower_4} />
          <img src={flower} alt="" className={styles.flower} />
          <h1 className={styles.logo_title}>Rootz</h1>
        </Link>
        <nav className={styles.navigate}>
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
        </nav>
        <Link to="/apply" className={styles.btn_apply}>
          Apply
        </Link>
        <div
          className={styles.burger_menu}
          isOpen={isOpen}
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <img src={close} alt="" /> : <img src={burger} alt="" />}
        </div>
        <Sidebar isOpen={isOpen} />
      </div>
    </header>
  );
};

export default Header;

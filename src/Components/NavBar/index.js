import React from "react";
import styles from "./NavBar.module.css";
import logo from "../../assets/logo.png";
import home from "../../assets/Home-4--Streamline-Core.png";
import task from "../../assets/Task-List--Streamline-Core.png";
import calendar from "../../assets/Blank-Calendar--Streamline-Core.png";
import user from "../../assets/User-Circle-Single--Streamline-Core.png";
import logout from "../../assets/Logout-1--Streamline-Core.png";
import { Link } from "react-router-dom";
import DateRangeCalendarCalendarsProp from "../Calendar/index";

function NavBar() {
  return (
    <nav className={styles.container}>
      <div className={styles.container_nav}>
        <div className={styles.container_logo}>
          <img src={logo} className={styles.logo} />
        </div>
        <div className={styles.separator}></div>
        <ul className={styles.container_lista}>
          <li>
            <Link to="/">
              <img src={home} alt="Home" />
              Home
            </Link>
          </li>
          {/* <li>
            <Link to="/tasks">
              <img src={task} alt="Tarefas" />
              Tarefas
            </Link>
          </li> */}
          <li>
            <Link to="/calendar">
              <img src={calendar} alt="Calendario" />
              Calendario
            </Link>
          </li>
          <div className={styles.calendar}>
            <DateRangeCalendarCalendarsProp />
          </div>
          <li>
            <Link to="/profile">
              <img src={user} alt="Perfil" />
              Perfil
            </Link>
          </li>
          <li>
            <Link to="/logout">
              <img src={logout} alt="Sair" />
              Sair
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;

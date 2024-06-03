import React from "react";
import "./NavBar.css";
import logo from "../../assets/logo.png";
import home from "../../assets/Home-4--Streamline-Core.png";
import task from "../../assets/Task-List--Streamline-Core.png";
import calendar from "../../assets/Blank-Calendar--Streamline-Core.png";
import user from "../../assets/User-Circle-Single--Streamline-Core.png";
import logout from "../../assets/Logout-1--Streamline-Core.png";

function NavBar() {
  return (
    <nav>
      <div className="container_nav">
        <div className="logo">
          <img src={logo} />
        </div>
        <div className="separator"></div>
        <ul>
          <li>
            <img src={home} />
            <a href="#">Home</a>
          </li>
          <li>
            <img src={task} />
            <a href="#">Tarefas</a>
          </li>
          <li>
            <img src={calendar} />
            <a href="#">Calendario</a>
          </li>
          <li>
            <img src={user} />
            <a href="#">Perfil</a>
          </li>
          <li>
            <img src={logout} />
            <a href="#">Sair</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;

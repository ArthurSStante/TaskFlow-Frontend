import React from "react";
import styles from "./LP.module.css";
import logoTF from "../../assets/logoTaskFlow.png";
import fundo from "../../assets/fundo.png";
import { Link } from "react-router-dom";

function LandingPage() {
  return (
    <div className={styles.geral}>
      <header className={styles.header}>
        <div className={styles.navbar}>
          <a href="#" className={styles.logo}>
            <img src={logoTF} alt="Logo" />
          </a>
          <div className={styles.menu}>
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#ride">Ride</a>
            </li>
            <li>
              <a href="#services">Services</a>
            </li>
            <li>
              <a href="#reviews">Reviews</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
          </div>
          <div className={styles.headerBtn}>
            <Link to="/login">
              <a href="#signup" className={styles.signUp}>
                Cadastrar
              </a>
            </Link>
            <Link to="/login">
              <a href="#signin" className={styles.signIn}>
                Login
              </a>
            </Link>
          </div>
        </div>
      </header>
      <section className={styles.home} id="home">
        <div className={styles.text}>
          <h1>
            <span>Deseja organizar</span>
            <br />
            suas tarefas?
          </h1>
          <p>
            Com este app, você verá que se <br />
            organizar nunca foi tão simples
          </p>
        </div>
        <div>
          <img src={fundo} alt="Background" />
        </div>
      </section>
    </div>
  );
}

export default LandingPage;

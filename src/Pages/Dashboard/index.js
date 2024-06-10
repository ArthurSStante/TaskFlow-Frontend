import React from "react";
import "./Dash.css";
import NavBar from "../../Components/NavBar";
import Cards from "../../Components/Cards";

function Dash() {
  return (
    <section className="d-flex">
      <NavBar />
      <div className="dash">
        <div className="title">
          <h1>Dashboard</h1>
        </div>
        <div className="content">
          <t>Crie sua tarefas: </t>
          <button>+</button>
        </div>
        <div className="table">
          <t>Tarefas do Dia: </t>
          <Cards />
        </div>
        <div className="cronograma">
          <div className="content">
            <t>Crie um Cronograma </t>
            <button>+</button>
          </div>
          <div className="table">
            <t>Seus Cronogramas: </t>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Dash;

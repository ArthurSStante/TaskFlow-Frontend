import React from "react";
import "./Dash.css";
import NavBar from "../../Components/NavBar";
import Cards from "../../Components/Cards";
import Modal from "../../Components/modals";

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
          <Modal />
        </div>
        <div className="table">
          <t>Tarefas do Dia: </t>
          <Cards />
        </div>
        <div className="cronograma">
          <div className="content">
            <t>Tarefas finalizadas: </t>
          </div>
          <div className="table">
            <t>Concluidas: </t>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Dash;

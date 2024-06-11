import React, { useState } from "react";
import { Modal } from "antd";
import { AiTwotonePlusCircle } from "react-icons/ai";
import styles from "./modal.module.css";

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <AiTwotonePlusCircle type="primary" onClick={showModal} />
      <Modal
        title="Crie sua Tarefa"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <div className={styles.container}>
          <div>
            <input className={styles.input} placeholder="Nome da Tarefa" />
          </div>
          <div>
            <select className={styles.select} name="Status da Tarefa">
              <option disabled selected hidden>
                Selecione o status da tarefa
              </option>
              <option>Pendente</option>
              <option>Andamento</option>
              <option>Concluida</option>
            </select>
          </div>
          <div>
            <input className={styles.input} placeholder="Data Limite" />
          </div>
          <div>
            <input className={styles.input} placeholder="Descrição" />
          </div>
        </div>
      </Modal>
    </>
  );
};

export default App;

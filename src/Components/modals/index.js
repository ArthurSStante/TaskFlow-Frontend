import React, { useState } from "react";
import { AiTwotonePlusCircle } from "react-icons/ai";
import styles from "./modal.module.css";
import { Modal } from "antd";
import { api } from "../../utils/api";

const App = ({ onCreateSuccess }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [tituloTarefa, setTituloTarefa] = useState("");
  const [statusTarefa, setStatusTarefa] = useState("");
  const [dataLimite, setDataLimite] = useState("");
  const [descricao, setDescricao] = useState("");
  const [horaLimite, setHoraLimite] = useState("");

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = async (e) => {
    e.preventDefault();
    try {
      const data = {
        titleTask: tituloTarefa,
        statusTask: statusTarefa,
        limited_date: dataLimite,
        hourTask: horaLimite,
        descriptionTask: descricao,
      };
      console.log("JSON", data);

      const response = await api.post("/task/register-task", data);
      if (response.status >= 200) {
        console.log("Tarefa registrada com sucesso");
        onCreateSuccess(data);
        setIsModalOpen(false);
        setTituloTarefa("");
        setStatusTarefa("");
        setDataLimite("");
        setDescricao("");
        setHoraLimite("");
      }
    } catch (error) {
      console.error("Erro ao registrar tarefa:", error);
    }
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const handleStatusChange = (e) => {
    setStatusTarefa(e.target.value);
  };

  return (
    <>
      <AiTwotonePlusCircle type="primary" onClick={showModal} />
      <Modal
        title="Crie sua Tarefa"
        open={isModalOpen}
        onOk={handleOk}
        okText="Confirmar"
        onCancel={handleCancel}
      >
        <div className={styles.container}>
          <div>
            <input
              className={styles.input}
              placeholder="Nome da Tarefa"
              value={tituloTarefa}
              onChange={(e) => setTituloTarefa(e.target.value)}
            />
          </div>
          <div>
            <select
              className={styles.select}
              name="Status da Tarefa"
              value={statusTarefa}
              onChange={handleStatusChange}
            >
              <option value="" disabled hidden>
                Selecione o status da tarefa
              </option>
              <option value={2}>Pendente</option>
              <option value={1}>Andamento</option>
              <option value={3}>Concluida</option>
            </select>
          </div>
          <div>
            <input
              className={styles.input}
              placeholder="Data Limite"
              type="date"
              value={dataLimite}
              onChange={(e) => setDataLimite(e.target.value)}
            />
          </div>
          <div>
            <input
              className={styles.input}
              placeholder="hora limite"
              type="time"
              value={horaLimite}
              onChange={(e) => setHoraLimite(e.target.value)}
            />
          </div>
          <div>
            <input
              className={styles.input}
              placeholder="Descrição"
              value={descricao}
              onChange={(e) => setDescricao(e.target.value)}
            />
          </div>
        </div>
      </Modal>
    </>
  );
};

export default App;

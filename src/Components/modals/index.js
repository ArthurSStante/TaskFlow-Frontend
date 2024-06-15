import React, { useState } from "react";
import { AiTwotonePlusCircle } from "react-icons/ai";
import styles from "./modal.module.css";
import { Modal } from "antd";
import { api } from "../../utils/api";

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [tituloTarefa, setTituloTarefa] = useState("");
  const [statusTarefa, setStatusTarefa] = useState("");
  const [dataLimite, setDataLimite] = useState("");
  const [descricao, setDescricao] = useState("");

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = async (e) => {
    e.preventDefault();
    try {
      const response = await api.post("/task/register-taks", {
        titulo_tarefa: tituloTarefa,
        fg_ativo: statusTarefa,
        data_tarefa: dataLimite,
        desc_tarefa: descricao,
      });
      if (response.status >= 200) {
        console.log("Tarefa registrada com sucesso");
        setIsModalOpen(false);
      }
    } catch (error) {
      console.error("Erro ao registrar tarefa:", error);
    }
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
              defaultValue={statusTarefa}
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

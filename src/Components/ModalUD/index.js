import React, { useState } from "react";
import styles from "./modalUD.module.css";
import { Modal, Button } from "antd";

const ModalUD = ({ tarefa, onUpdate }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [title, setTitle] = useState(tarefa.title);
  const [fgAtivo, setFgAtivo] = useState(tarefa.fg_ativo);
  const [dataTarefa, setDataTarefa] = useState(tarefa.data_tarefa);
  const [descricao, setDescricao] = useState(tarefa.descricao);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    const updatedTask = {
      title,
      fg_ativo: fgAtivo,
      data_tarefa: dataTarefa,
      descricao,
    };

    // Fazer a chamada de API para atualizar a tarefa no backend
    fetch(`/items/${tarefa.id}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedTask),
    })
      .then((response) => response.json())
      .then((data) => {
        // Chama o callback onUpdate para atualizar a tarefa na interface
        onUpdate(data);
        setIsModalOpen(false);
      })
      .catch((error) => {
        console.error("Erro ao atualizar a tarefa:", error);
      });
  };

  const handleDelete = () => {
    // Fazer a chamada de API para deletar a tarefa no backend
    fetch(`/delete-task/${tarefa.id}`, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then((data) => {
        // Chama o callback onUpdate para atualizar a tarefa na interface
        onUpdate(data);
        setIsModalOpen(false);
      })
      .catch((error) => {
        console.error("Erro ao deletar a tarefa:", error);
      });
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div onClick={showModal}>Edit</div>
      <Modal
        title="Atualizar Tarefa"
        open={isModalOpen}
        onCancel={handleCancel}
        cancelText="Cancelar"
        footer={[
          
          <Button key="delete" type="danger" onClick={handleDelete}>
            Deletar
          </Button>,
          <Button key="update" type="primary" onClick={handleOk}>
            Atualizar
          </Button>,
        ]}
      >
        <div className={styles.container}>
          <div>
            <input
              className={styles.input}
              placeholder="Nome da Tarefa"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div>
            <select
              className={styles.select}
              name="Status da Tarefa"
              value={fgAtivo ? "Ativo" : "Inativo"}
              onChange={(e) => setFgAtivo(e.target.value === "Ativo")}
            >
              <option disabled hidden>
                Selecione o status da tarefa
              </option>
              <option value="Ativo">Ativo</option>
              <option value="Inativo">Inativo</option>
            </select>
          </div>
          <div>
            <input
              className={styles.input}
              placeholder="Data Limite"
              value={dataTarefa}
              onChange={(e) => setDataTarefa(e.target.value)}
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

export default ModalUD;

import React, { useState } from "react";
import styles from "./modalUD.module.css";
<<<<<<< HEAD
import { Modal } from 'antd';

const ModalUD = ({ tarefa }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
=======
import { Modal, Button } from "antd";
import { api } from "../../utils/api";

const ModalUD = ({ tarefa, onUpdate }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [title, setTitle] = useState(tarefa.titulo_tarefa);
  const [fgAtivo, setFgAtivo] = useState(tarefa.fg_ativo);
  const [dataTarefa, setDataTarefa] = useState(tarefa.data_tarefa);
  const [descricao, setDescricao] = useState(tarefa.desc_tarefa);
>>>>>>> 077dce8ecbef27b1a2105984fe9c917e3d5de3c2

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
<<<<<<< HEAD
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const handleDelete = () => {
=======
    const updatedTask = {
      titulo_tarefa: title,
      fg_ativo: fgAtivo,
      data_tarefa: dataTarefa,
      desc_tarefa: descricao,
    };

    // Fazer a chamada de API para atualizar a tarefa no backend
    api.post(`/items/${tarefa.id_tarefa}`, updatedTask)
      .then((response) => {
        if (response.status !== 200) {
          throw new Error("Erro ao atualizar a tarefa");
        }
        return response.data;
      })
      .then((data) => {
        // Chama o callback onUpdate para atualizar a tarefa na interface
        onUpdate(data);
        setIsModalOpen(false); // Fecha o modal após a atualização
      })
      .catch((error) => {
        console.error("Erro ao atualizar a tarefa:", error);
      });
  };

  const handleDelete = () => {
    // Fazer a chamada de API para deletar a tarefa no backend
    api.delete(`task/delete-task/${tarefa.id_tarefa}`)
      .then((response) => {
        if (response.status !== 200) {
          throw new Error("Erro ao deletar a tarefa");
        }
        return response.data;
      })
      .then((data) => {
        // Chama o callback onUpdate para atualizar a tarefa na interface
        onUpdate(data);
        setIsModalOpen(false); // Fecha o modal após a deleção
      })
      .catch((error) => {
        console.error("Erro ao deletar a tarefa:", error);
      });
  };

  const handleCancel = () => {
>>>>>>> 077dce8ecbef27b1a2105984fe9c917e3d5de3c2
    setIsModalOpen(false);
  };

  return (
    <>
      <div onClick={showModal}>Edit</div>
      <Modal
        title="Atualizar Tarefa"
        open={isModalOpen}
<<<<<<< HEAD
        onDelete={handleDelete}
        onOk={handleOk}
        onCancel={handleCancel}
=======
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
>>>>>>> 077dce8ecbef27b1a2105984fe9c917e3d5de3c2
      >
        <div className={styles.container}>
          <div>
            <input
              className={styles.input}
              placeholder="Nome da Tarefa"
<<<<<<< HEAD
              value={tarefa.title}
              readOnly
            />
          </div>
          <div>
            <select className={styles.select} name="Status da Tarefa" value={tarefa.fg_ativo ? "Ativo" : "Inativo"} readOnly>
=======
              value={tarefa.titulo_tarefa}
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
>>>>>>> 077dce8ecbef27b1a2105984fe9c917e3d5de3c2
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
              value={tarefa.data_tarefa}
<<<<<<< HEAD
              readOnly
=======
              onChange={(e) => setDataTarefa(e.target.value)}
>>>>>>> 077dce8ecbef27b1a2105984fe9c917e3d5de3c2
            />
          </div>
          <div>
            <input
              className={styles.input}
              placeholder="Descrição"
<<<<<<< HEAD
              value={tarefa.descricao}
              readOnly
=======
              value={tarefa.desc_tarefa}
              onChange={(e) => setDescricao(e.target.value)}
>>>>>>> 077dce8ecbef27b1a2105984fe9c917e3d5de3c2
            />
          </div>
        </div>
      </Modal>
    </>
  );
};

export default ModalUD;

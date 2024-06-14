import React, { useState } from "react";
import styles from "./modalUD.module.css";
import { Modal, Button } from "antd";
import { api } from "../../utils/api";

const ModalUD = ({ tarefa, onUpdate }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [title, setTitle] = useState(tarefa.titulo_tarefa);
  const [fgAtivo, setFgAtivo] = useState(tarefa.fg_ativo);
  const [dataTarefa, setDataTarefa] = useState(tarefa.data_tarefa);
  const [descricao, setDescricao] = useState(tarefa.desc_tarefa);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
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
              onChange={(e) => setDataTarefa(e.target.value)}
            />
          </div>
          <div>
            <input
              className={styles.input}
              placeholder="Descrição"
              value={tarefa.desc_tarefa}
              onChange={(e) => setDescricao(e.target.value)}
            />
          </div>
        </div>
      </Modal>
    </>
  );
};

export default ModalUD;

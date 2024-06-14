import React, { useState } from "react";
import styles from "./modalUD.module.css";
import { Modal } from 'antd';

const ModalUD = ({ tarefa }) => {
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

  const handleDelete = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div onClick={showModal}>Edit</div>
      <Modal
        title="Atualizar Tarefa"
        open={isModalOpen}
        onDelete={handleDelete}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <div className={styles.container}>
          <div>
            <input
              className={styles.input}
              placeholder="Nome da Tarefa"
              value={tarefa.title}
              readOnly
            />
          </div>
          <div>
            <select className={styles.select} name="Status da Tarefa" value={tarefa.fg_ativo ? "Ativo" : "Inativo"} readOnly>
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
              readOnly
            />
          </div>
          <div>
            <input
              className={styles.input}
              placeholder="Descrição"
              value={tarefa.descricao}
              readOnly
            />
          </div>
        </div>
      </Modal>
    </>
  );
};

export default ModalUD;

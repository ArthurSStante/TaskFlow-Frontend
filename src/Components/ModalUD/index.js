import React, { useState, useEffect } from "react";
import styles from "./modalUD.module.css";
import { Modal, Button } from "antd";
import { api } from "../../utils/api";

const statusMapping = {
  pendente: 2,
  andamento: 1,
  concluida: 3,
};

const ModalUD = ({ tarefa, onUpdate, onDelete }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [idTarefa, setIdTarefa] = useState(tarefa.id_tarefa);
  const [title, setTitle] = useState(tarefa.titulo_tarefa);
  const [fgAtivo, setFgAtivo] = useState(tarefa.fg_ativo);
  const [dataTarefa, setDataTarefa] = useState(tarefa.data_tarefa);
  const [descricao, setDescricao] = useState(tarefa.desc_tarefa);
  const [horaLimite, setHoraLimite] = useState(tarefa.horario || "");

  useEffect(() => {
    setIdTarefa(tarefa.id_tarefa);
    setTitle(tarefa.titulo_tarefa);
    setFgAtivo(tarefa.fg_ativo);
    setDataTarefa(tarefa.data_tarefa);
    setDescricao(tarefa.desc_tarefa);
    setHoraLimite(tarefa.horario || "");
  }, [tarefa]);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    const updatedTask = {
      id_tarefa: idTarefa,
      titleTask: title,
      statusTask: statusMapping[fgAtivo],
      limited_date: dataTarefa,
      descriptionTask: descricao,
      hourTask: horaLimite,
    };

    // Fazer a chamada de API para atualizar a tarefa no backend
    api
      .put("/task/edit-task", updatedTask)
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
    api
      .delete("/task/delete-task", {
        data: { id_tarefa: tarefa.id_tarefa },
      })
      .then((response) => {
        if (response.status !== 200) {
          throw new Error("Erro ao deletar a tarefa");
        }
        return response.data;
      })
      .then((data) => {
        // Chama o callback onUpdate para atualizar a tarefa na interface
        onDelete(data);
        console.log("task excluida")
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
      <div onClick={showModal}>Editar</div>
      <Modal
        title="Atualizar Tarefa"
        open={isModalOpen}
        onCancel={handleCancel}
        footer={[
          <Button key="back" onClick={handleCancel}>
            Cancelar
          </Button>,
          <Button key="delete" type="primary" onClick={handleDelete} danger>
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
              value={fgAtivo}
              onChange={(e) => setFgAtivo(e.target.value)}
            >
              <option value="" disabled hidden>
                Selecione o status da tarefa
              </option>
              <option value="pendente">Pendente</option>
              <option value="andamento">Andamento</option>
              <option value="concluida">Concluida</option>
            </select>
          </div>
          <div>
            <input
              className={styles.input}
              placeholder="Data Limite"
              type="date"
              value={dataTarefa}
              onChange={(e) => setDataTarefa(e.target.value)}
            />
          </div>
          <div>
            <input
              className={styles.input}
              placeholder="Hora Limite"
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

export default ModalUD;

import React from "react";
import "./cards.css"; // Certifique-se de que o caminho está correto
import ModalUD from "../ModalUD";
import { formatDate, formatTime } from "../../utils/dateUtils";
import { Empty } from "antd";
import { Space, Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";

function Cards({ dados, loading, error, handleUpdate }) {
  if (loading) {
    // Mostrar um indicador de loading, se necessário
    return (
      <div className="spin">
        <Space>
          <Spin
            indicator={
              <LoadingOutlined
                style={{
                  fontSize: 48,
                }}
                spin
              />
            }
          />
        </Space>
      </div>
    );
  }

  if (error) {
    return (
      <div className="empty">
        <Empty />
      </div>
    );
  }

  if (!dados || dados.length === 0) {
    // Mostrar mensagem quando não há dados
    return (
      <div className="empty">
        <Empty description="Não há tarefas disponíveis." />
      </div>
    );
  }
  return (
    <div className="cards">
      {dados.map((tarefa) => (
        <div key={tarefa.id_tarefa} className="card">
          <div className="card-details">
            <p className="text-title text-opacity">{tarefa.titulo_tarefa}</p>
            <p className="text-body text-opacity">
              <span className="title-card">Data limite: </span>
              <span className="text-value">
                {formatDate(tarefa.data_tarefa)}
              </span>
            </p>
            <p className="text-body text-opacity">
              <span className="title-card">Hora Limite: </span>
              <span className="text-value">{formatTime(tarefa.horario)}</span>
            </p>
            <p className="text-body text-opacity">
              <span className="title-card">Status: </span>
              <span className="text-value">{tarefa.fg_ativo}</span>
            </p>
          </div>
          <button className="card-button">
            {/* Passa a função handleUpdate e ação para o ModalUD */}
            <ModalUD
              tarefa={tarefa}
              onUpdate={(updatedTask) => handleUpdate(updatedTask, "update")}
              onDelete={() => handleUpdate(tarefa, "delete")}
            />
          </button>
        </div>
      ))}
    </div>
  );
}

export default Cards;

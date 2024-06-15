import React, { useEffect, useState } from "react";
import './cards.css'; // Certifique-se de que o caminho está correto
import { api } from '../../utils/api';
import ModalUD from "../ModalUD";

function Cards() {
  const [dados, setDados] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    api
      .get("task")
      .then((response) => {
        console.log("Resposta da API:", response.data);
        if (Array.isArray(response.data.task)) {
          setDados(response.data.task);
        } else {
          console.error(
            "A resposta da API não contém um array esperado:",
            response.data
          );
          setDados([]);
        }
      })
      .catch((error) => {
        console.error("Erro ao buscar dados da API:", error);
        setError("Erro ao buscar dados");
        setDados([]);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const handleUpdate = (updatedTask) => {
    setDados(prevDados => prevDados.map(task => task.id_tarefa === updatedTask.id_tarefa ? updatedTask : task));
  };

  if (loading) {
    return <p>Carregando...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div className="cards">
      {dados.map((tarefa) => (
        <div key={tarefa.id_tarefa} className="card">
          <div className="card-details">
            <p className="text-title text-opacity">{tarefa.titulo_tarefa}</p>
            <p className="text-body text-opacity">
              Data limite de finalização: {tarefa.data_tarefa}
            </p>
            <p className="text-body text-opacity">
              Status: {tarefa.fg_ativo ? "Ativo" : "Inativo"}
            </p>
          </div>
          <button className="card-button">
            <ModalUD tarefa={tarefa} onUpdate={handleUpdate} />
          </button>
        </div>
      ))}
    </div>
  );
}

export default Cards;

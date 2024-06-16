// Dash.js
import React, { useEffect, useState } from "react";
import "./Dash.css";
import NavBar from "../../Components/NavBar";
import Cards from "../../Components/Cards";
import Modal from "../../Components/modals";
import { api } from "../../utils/api";

function Dash() {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Função para buscar os dados das tarefas na API
  const fetchTasks = async () => {
    setLoading(true); // Define o estado de loading como true antes de iniciar a busca
    try {
      const response = await api.get("task");
      console.log("Resposta da API ", response.data);
      if (Array.isArray(response.data.task)) {
        setTasks(response.data.task);
        setLoading(false);
      } else {
        console.error(
          "A resposta da API não contém um array esperado:",
          response.data
        );
        setTasks([]);
      }
    } catch (error) {
      console.error("Erro ao buscar dados da API ", error);
      setError("Erro ao buscar dados");
      setTasks([]);
    } finally {
      setLoading(false);
    }
  };

  // Carregar as tarefas assim que o componente for montado
  useEffect(() => {
    fetchTasks();
  }, []); // Chamada apenas uma vez ao montar o componente

  // Função para atualizar as tarefas após criar uma nova tarefa
  const handleCreateTask = async (newTask) => {
    console.log("Nova tarefa criada:", newTask);
    await fetchTasks(); // Faz um fetch dos dados atualizados
  };

  const handleUpdate = (updatedTask, action) => {
    if (action === "update") {
      // Atualiza a tarefa existente na lista de dados
      setTasks((prevDados) =>
        prevDados.map((task) =>
          task.id_tarefa === updatedTask.id_tarefa ? updatedTask : task
        )
      );
    } else if (action === "delete") {
      // Remove a tarefa da lista de dados
      setTasks((prevDados) =>
        prevDados.filter((task) => task.id_tarefa !== updatedTask.id_tarefa)
      );
    }
  };

  return (
    <section className="d-flex">
      <NavBar />
      <div className="dash">
        <div className="title">
          <h1>Dashboard</h1>
        </div>
        <div className="content">
          <p>Crie suas tarefas: </p>
          <Modal onCreateSuccess={handleCreateTask} />
        </div>
        <div className="table">
          <p>Tarefas do Dia: </p>
          <div className="carousel-container">
            <div className="carousel">
              <Cards
                dados={tasks}
                loading={loading}
                error={error}
                handleUpdate={handleUpdate}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Dash;

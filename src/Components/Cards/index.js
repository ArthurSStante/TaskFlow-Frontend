import React, { useEffect, useState } from "react";
import './cards.css'; // Certifique-se de que o caminho está correto
import { api } from '../../utils/api';

function Cards() {
    const [dados, setDados] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        api
            .get("task")
            .then((response) => {
                console.log("Resposta da API:", response.data);
                // Certifique-se de que response.data.task é um array
                if (Array.isArray(response.data.task)) {
                    setDados(response.data.task);
                } else {
                    console.error("A resposta da API não contém um array esperado:", response.data);
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

    if (loading) {
        return <p>Carregando...</p>;
    }

    if (error) {
        return <p>{error}</p>;
    }
    console.log(dados);
    if (dados.length === 0) {
        return (
            <div className="no-tasks">
                <p>--Sem tarefas criadas--</p>
            </div>
        );
    }
    return (
        <div>
            {dados.map((dados) => (
                <div key={dados.id} className="card">
                    <div className="card-details">
                        <p className="text-title text-opacity">{dados.title}</p>
                        <p className="text-body text-opacity">Data limite de finalização: {dados.data_tarefa}</p>
                        <p className="text-body text-opacity">Status: {dados.fg_ativo ? 'Ativo' : 'Inativo'}</p>
                    </div>
                    <button className="card-button">More info</button>
                </div>
            ))}
        </div>
    );
}

export default Cards;

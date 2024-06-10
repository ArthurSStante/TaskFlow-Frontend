import React from "react";
import './cards.css'; // Certifique-se de que o caminho está correto

function Cards() {
    return (
        <div className="card">
            <div className="card-details">
                <p className="text-title">Card title</p>
                <p className="text-body">Here are the details of the card</p>
            </div>
            <button className="card-button">More info</button>
        </div>
    );
}

export default Cards;

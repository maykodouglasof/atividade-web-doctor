import React, { useState, useEffect } from 'react';
import api from '../../services/api';
import "./styles.css";

export default function Dashboard() {
    const [medicos, setMedicos] = useState([]);
    const [name, setName] = useState("");
    const [type, setType] = useState("");


    useEffect(() => {
        api.get('medicos').then(response => {
            setMedicos(response.data);
        })
    }, []);

    async function handleNewRecipe(e) {
        e.preventDefault();

        const data = {
            medicos,
            name,
            type
        };

        await api.post("forms", data);

    }


    return (

        <div className="container-medico">
            <div className="content-medico">
                <p>
                    <strong>Formulario</strong>
                </p>

                <form onSubmit={handleNewRecipe}>
                    <label htmlFor="name">Médico Responsavel</label>
                    <select name="doctor">
                        {medicos.map((i, k) =>
                            <option key={k} value={medicos}>{medicos[k]}</option>
                        )}
                    </select>

                    <label htmlFor="name">Nome do Paciente</label>
                    <input
                        id="name"
                        type="text"
                        placeholder="Seu nome"
                        name="name"
                        value={name}
                        onChange={(event) => setName(event.target.value)}
                    />

                    <label htmlFor="type">Tipo Sanguineo</label>
                    <input
                        id="type"
                        type="text"
                        placeholder="Seu Tipo Sanguineo"
                        name="type"
                        value={type}
                        onChange={(event) => setType(event.target.value)}
                        required
                    />

                    <button onClick={ () => alert('Formulario Enviado!') } type="submit" className="btn">
                        Enviar
                    </button>

                </form>
            </div>
        </div>

    )
}
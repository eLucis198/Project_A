import React, { useState } from 'react';


import api from '../../services/api';
import './styles.css';

export default function Index(){
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [whatsapp, setWhatsapp] = useState('');
    const [endereco, setEndereco] = useState('');
    const [job, setJob] = useState('');
    const [hobby, setHobby] = useState('');
    const [team, setTeam] = useState('');

    async function handleCreate(e){
        e.preventDefault();

        const data = {
            name,
            email,
            whatsapp,
            endereco,
            job,
            hobby,
            team
        };

        try {
            await api.post('/', data);
            alert('Sucesso');
            setName('');
            setEmail('');
            setWhatsapp('');
            setEndereco('');
            setJob('');
            setHobby('');
            setTeam('');
        } catch (error) {
            alert('Ops! Houve algo de errado, tente novamente.');
        }
    }


    return (
        <div className="dados-container">
            <section className="form">
                <form onSubmit={handleCreate}>
                    <h1>Bem vindo!</h1>

                    <input
                        placeholder="Seu Nome"
                        value={name}
                        onChange={e => setName(e.target.value)}
                    />
                    <input
                        placeholder="Seu E-mail"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                    <input
                        placeholder="Seu WhatsApp"
                        value={whatsapp}
                        onChange={e => setWhatsapp(e.target.value)}
                    />
                    <input
                        placeholder="Seu Endereço"
                        value={endereco}
                        onChange={e => setEndereco(e.target.value)}
                    />
                    <input
                        placeholder="Seu Emprego"
                        value={job}
                        onChange={e => setJob(e.target.value)}
                    />
                    <input
                        placeholder="Seu Hobby"
                        value={hobby}
                        onChange={e => setHobby(e.target.value)}
                    />
                    <input
                        placeholder="Seu Time"
                        value={team}
                        onChange={e => setTeam(e.target.value)}
                    />

                    <button className="button" type="submit">Enviar</button>
                </form>
            </section>
        </div>
    );
}
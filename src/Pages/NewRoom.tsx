import { Link, useHistory } from 'react-router-dom'
import { FormEvent } from 'react'

import IllustrationImg from '../assets/images/illustration.svg';
import LogoImg from '../assets/images/logo.svg';

import '../styles/auth.scss';
import { Button } from '../components/Button';
import { useState } from 'react';
import { database } from '../services/firebase';
import { useAuth } from '../hooks/useAuth';


export function NewRoom() {
    const history = useHistory();
    const { user } = useAuth();
    const [newRoom, setNewRoom] = useState('')
    async function handleCreateRoom(event: FormEvent) {
        event?.preventDefault();

        if( newRoom.trim() === '') {
            return;
        }

        const roomRef = database.ref('rooms');

        const firebaseRoom = await roomRef.push({
            title: newRoom,
            authorId: user?.id
        });

        history.push(`/rooms/${firebaseRoom.key}`)
    }

    return(
        <div id="page-auth">
            <aside>
                <img src={IllustrationImg} alt="Ilustracao"/>
                <strong>Crie salas de Q&amp;A ao-vivo</strong>
                <p>Tire as dúvidas da sua audiência em tempo-real</p>
            </aside>
            <main>
                <div className="main-content">
                    <img src={LogoImg} alt="Logo let me ask" />
                    <h2>Criar uma nova sala</h2>
                    <div>
                        <form onSubmit={handleCreateRoom}>
                            <input 
                            type="text" 
                            placeholder="Nome da sala"
                            onChange={event => setNewRoom(event.target.value)} 
                            value={newRoom}
                            />
                            <Button type="submit">
                                Criar Sala
                            </Button>
                        </form>
                        <p>
                            Quer entrar em uma sala existente? <Link to="/">Clique aqui</Link>
                        </p>
                    </div>
                </div>
            </main>
        </div>
    )
}
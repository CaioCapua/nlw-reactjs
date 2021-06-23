import { useHistory } from 'react-router';
import { FormEvent } from 'react'

import IllustrationImg from '../assets/images/illustration.svg';
import GoogleIcon from '../assets/images/google-icon.svg';
import LogoImg from '../assets/images/logo.svg';

import '../styles/auth.scss';
import { Button } from '../components/Button';
import { useAuth } from '../hooks/useAuth';
import { useState } from 'react';
import { database } from '../services/firebase';

export function Home() {    
    const history = useHistory();
    const { signInWithGoogle, user } = useAuth()
    const [roomCode, setRoomCode] = useState('');

    async function handleCreateRoom(){
        if(!user) {
            await  signInWithGoogle();
        }

        history.push('/rooms/new')
    }

    async function handleJoinRoom(event: FormEvent) {
        event.preventDefault();
    
        if( roomCode.trim() === '') {
            return;
        } 

        const roomRef = await database.ref(`rooms/${roomCode}`).get();

        if( !roomRef.exists() ) {
            alert('Room does not exists');
            return;
        }

        history.push(`/rooms/${roomCode}`)
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
                    <button onClick={handleCreateRoom} className="create-room">
                        <img src={GoogleIcon} alt="Icone Google" />
                        Crie sua sala com Google
                    </button>
                    <div className="separator" >ou entre em um sala</div>
                    <div>
                        <form onSubmit={handleJoinRoom}>
                            <input 
                            type="text" 
                            placeholder="Digite o código da sala" 
                            onChange={event => setRoomCode(event.target.value)}
                            value={roomCode}
                            />
                            <Button type="submit">
                                Entrar na Sala
                            </Button>
                        </form>
                    </div>
                </div>
            </main>
        </div>
    )
}
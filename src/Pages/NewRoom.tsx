import { Link } from 'react-router-dom'

import IllustrationImg from '../assets/images/illustration.svg';
import LogoImg from '../assets/images/logo.svg';

import '../styles/auth.scss';
import { Button } from '../components/Button';
// import { useAuth } from '../hooks/useAuth';

export function NewRoom() {
    // const { user } = useAuth();
    
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
                        <form>
                            <input 
                            type="text" 
                            placeholder="Nome da sala" 
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
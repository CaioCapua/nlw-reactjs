import { useHistory } from 'react-router';

import IllustrationImg from '../assets/images/illustration.svg';
import GoogleIcon from '../assets/images/google-icon.svg';
import LogoImg from '../assets/images/logo.svg';

import '../styles/auth.scss';
import { Button } from '../components/Button';
import { useAuth } from '../hooks/useAuth';

export function Home() {    
    const history = useHistory();
    const { signInWithGoogle, user } = useAuth()

    async function handleCreateRoom(){
        if(!user) {
            await  signInWithGoogle();
        }


        history.push('/rooms/new')
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
                        <form>
                            <input 
                            type="text" 
                            placeholder="Digite o código da sala" 
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
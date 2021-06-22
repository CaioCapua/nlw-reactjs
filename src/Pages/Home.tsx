import IllustrationImg from '../assets/images/illustration.svg';
import GoogleIcon from '../assets/images/google-icon.svg';
import LogoImg from '../assets/images/logo.svg';

import '../styles/auth.scss';

export function Home() {
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
                    <button className="create-room">
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
                            <button type="submit">Entrar na Sala</button>
                        </form>
                    </div>
                </div>
            </main>
        </div>
    )
}
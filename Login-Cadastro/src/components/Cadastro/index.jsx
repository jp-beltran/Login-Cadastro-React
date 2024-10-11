import './style.css';

export default function Cadastro() {
    return(
        <div className="container">
            <h1>Cadastro</h1>
            <input type="text" placeholder='Nome'/>
            <input type="number" placeholder='CPF'/>
            <input type="email" placeholder='Email'/>
            <input type="password" placeholder='Senha'/>
            <button>Cadastrar</button>
        </div>
    )
}
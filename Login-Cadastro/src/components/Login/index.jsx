import './style.css';

export default function Login() {
    return(
        <div className="container">
             <h1>Login</h1>
            <input type="email" placeholder='Email'/>
            <input type="password" placeholder='Senha'/>
            <button>Login</button>
        </div>
    )

}
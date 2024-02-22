import { useState } from "react";
import './login_css.css';
import GoogleLoginButton from "../../../components/google_login_button";

const LoginPage = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        // Handle login logic here
        console.log('Username:', username);
        console.log('Password:', password);
      };
    
    return (
        <div className="login-container">

            <h2>Login</h2>

            <form className="login-form">
            <div className="form-group">
            <label htmlFor="username">Username:</label>
            <input
                type="text"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
            </div>
            <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            </div>
            <button className="login-button" type="button" onClick={handleLogin}>Login</button>
            <GoogleLoginButton />
        </form>



        </div>
    );
}


export default LoginPage;
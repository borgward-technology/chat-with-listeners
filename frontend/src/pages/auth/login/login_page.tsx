import { useEffect, useState } from "react";
import './login_css.css';
import {auth, provider} from "../../../components/firebase";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { Auth } from "../auth";


const LoginPage = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    // const [value, setValue] = useState('');

    const handleLogin = () => {
    
        console.log('Username:', username);
        console.log('Password:', password);
      };

      const handleGoogleLogin =  () => {
        console.log("handleGoogleLogin ----------------   ");
        signInWithPopup(auth, provider)
          .then((result) => {
            const user = result.user;
            console.log("user ----------------   "+user);
          }).catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            const email = error.customData.email;
            const credential = GoogleAuthProvider.credentialFromError(error);
            console.log("error ----------------   "+error);
          });
      };

    //   useEffect(()=> {
    //     setValue(localStorage.getItem('email')!);
    //   })
    
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

            <div style={({height:"20px"})}></div>

            {/* <button onClick={handleGoogleLogin}> Sign in with Google</button> */}

            <Auth />


            {/* {value ? <h1>Verified</h1> : <h1>Not Verified</h1>} */}
        </form>



        </div>
    );
}


export default LoginPage;
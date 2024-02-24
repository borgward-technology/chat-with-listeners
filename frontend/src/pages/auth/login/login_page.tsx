import {  useEffect, useState } from "react";
import './login_css.css';
import {auth, provider} from "../../../components/firebase";
import { GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import {  GoogleLoginButton } from "../google_login_button";
import { useNavigate } from "react-router-dom";


const LoginPage = () => {

  const navigate = useNavigate();

  const [value, setValue] = useState('');

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading ] = useState(false);


    const signIn = async (event:any) => {
        setLoading(true);
        event.preventDefault();
        console.log("email   ----     "+email);
        console.log("password   ----     "+password);
        try {
        const response = await signInWithEmailAndPassword(auth, email, password);
        console.log("user   ------     "+response.user.email);
        if(response.user.email != null) {
          localStorage.setItem('email', response.user.email!);
          navigate("/");
        }
        setLoading(false);
        } catch (err){
          alert("Error while Login, try again");
          console.error("err   -----    "+err);
          setLoading(false);
      };

  }


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

      useEffect(()=> {
        const localStorageEmail = localStorage.getItem('email')!;
        console.log("localStorageEmail   =-----     "+localStorageEmail);
      })
    
    return (
        <div className="login-container">
            <h2>Login</h2>
            <form className="login-form">
            <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
                type="text"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
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
            <button className="login-button" type="button" onClick={signIn}>{loading ? "Loading" : "Login"}</button>

            <div style={({height:"20px"})}></div>

            {/* <button onClick={handleGoogleLogin}> Sign in with Google</button> */}

            <GoogleLoginButton />

        </form>
        </div>
    );
}


export default LoginPage;
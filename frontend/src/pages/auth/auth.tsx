
import { auth , provider} from "../../components/firebase";
import { createUserWithEmailAndPassword,signInWithPopup, signOut } from "firebase/auth";
import { useState } from "react";
import { useNavigate } from "react-router-dom";



export const Auth = () => {
const [loading, setLoading] = useState(false);

    const navigate =  useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
   
  const signIn = async (event:any) => {
    setLoading(true);
    event.preventDefault();
    console.log("email   ----     "+email);
    console.log("password   ----     "+password);
    try {
    const user = await createUserWithEmailAndPassword(auth, email, password);
    console.log("user   ------     "+user.user.email);
    if(user.user.email != null) {
        navigate("/");
    }   
    setLoading(false);
    } catch (err){
      console.error(err);
      setLoading(false);
    }
  };
  const signInWithGoogle = async () => {
    try {
    await signInWithPopup(auth,provider);
    } catch (err){
      console.error(err);
    }
  };
  const logOut = async () => {
    try {
    await signOut(auth);
    } catch (err){
      console.error(err);
    }
  };
  return (
    <div>
      <input placeholder="Email.." onChange={(e) => {
        setEmail(e.target.value);
        console.log("email   ----    "+email);
      }} />
      <input
        type="password"
        placeholder="Password.."
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={signIn} disabled={loading}> {loading ? 'Signing In...' : 'Sign In'} </button>
      <button onClick={signInWithGoogle} > Signin with google</button>
      <button onClick={logOut}> logOut</button>
    </div>
  );
};

import { auth , provider} from "../../components/firebase";
import { signInWithPopup, signOut } from "firebase/auth";
import { useState } from "react";

import { useNavigate } from "react-router-dom";

export const GoogleLoginButton = () => {

const navigate = useNavigate();

  const signInWithGoogle = async () => {
    try {
     signInWithPopup(auth,provider).then((res) => {
      console.log("EMAIL  ---------    "+res.user.email);
      const userEmail = res.user.email;
      if(userEmail != ""){
        navigate("/");
      }else{
        alert("Google Sign in Failed");
      }
    });
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
      <button className="login-button" type="button" onClick={signInWithGoogle} > SignIn with google</button>
      
    </div>
  );
};
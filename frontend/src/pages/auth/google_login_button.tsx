
import { auth , db, provider} from "../../components/firebase";
import { signInWithPopup } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";

import { useNavigate } from "react-router-dom";

export const GoogleLoginButton = () => {

const navigate = useNavigate();

  const signInWithGoogle = async () => {
    try {
     signInWithPopup(auth,provider).then(async (res : any) => {
      const userEmail = res.user.email;
      if(userEmail != ""){
        console.log("user   ------     "+userEmail);
        const userDocRef = doc(db, "users", res.user.uid);

        if(res.user.email != null) {
            await setDoc(userDocRef, {
                "uid":res.user.uid,
                "email" : res.user.email,
                "mobile" : res.user.phoneNumber,
                'city': "",
                'State': "",
                'country': "",
              });
            console.log("Document written with ID: ", userDocRef.id);
            navigate("/");
            return;
        }  

        navigate("/");
      }else{
        alert("Google Sign in Failed");
      }
    });
    } catch (err){
      console.error(err);
    }
  };

  // const logOut = async () => {
  //   try {
  //   await signOut(auth);
  //   } catch (err){
  //     console.error(err);
  //   }
  // };

  return (
    <div>
      <button className="login-button" type="button" onClick={signInWithGoogle} > SignIn with google</button>
      
    </div>
  );
};
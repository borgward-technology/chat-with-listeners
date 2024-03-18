import axios from "axios";
import { doc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../components/firebase";
import { getDoc } from "firebase/firestore/lite";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
interface UserInterface {
    username : string;
    email : string;
    phoneNumber : number;
}

const SelectDurationPage =   () => {

    const [selectedMinute, setStateSelectMinute] = useState(-1);
    const [userInformation, setUserInformation] = useState<UserInterface | null>(null);
  
    const navigate = useNavigate();

    useEffect(() => {
        const fetchUser  = async ()  =>  {
            try {
                const userId = "JecWNDppYTcGD4GPPbp0WeBZlyg2";
                const userDocRef = doc(db, 'users', userId);
                const userDocSnapshot = await getDoc(userDocRef);

                if (userDocSnapshot.exists()) {
                    const userData = userDocSnapshot.data();
                    console.log("USER INFORMATION  - ----     "+userData);

                    const userInformation : UserInterface = {
                        username: userData['username'],
                        phoneNumber: userData['mobile'],
                        email: userData['email'],
                    };

                    console.log("USER INFORMATION: ", userInformation);

                    setUserInformation(userInformation);

                    return userInformation;
                } else {
                console.log('User not found.');
                return null;

                }
            } catch (error) {
                console.error('Error fetching user:', error);
                return null;
            }
  
    };
  
    fetchUser();
    }, []);

    return (
        <div style={({
           height:"80vh",
           width:"100%",
           display:"flex",
           alignItems:'center',
           justifyContent:"center",
           flexDirection:"column",
           
           
            })}>

            <h1 style={({margin:"0 20px", textAlign:"center"})}>
                Select Duration of Chat
            </h1>

            <div style={({height:"20px"})}></div>

           <div style={({display:"flex" , flexDirection:'row',  flexWrap:"wrap", justifyContent:"space-evenly" })}>

            <Button sx={({margin:"15px 20px"})} onClick={() => {setStateSelectMinute(10)}} variant="outlined">10 Minutes</Button>
            <Button sx={({margin:"15px  20px"})} onClick={() => {setStateSelectMinute(30)}} variant="outlined">30 Minutes</Button>
            <Button sx={({margin:"15px  20px"})} onClick={() => {setStateSelectMinute(60)}} variant="outlined">60 Minutes</Button>
            <Button sx={({margin:"15px  20px"})} onClick={() => {setStateSelectMinute(120)}} variant="outlined">120 Minutes</Button>
            <Button sx={({margin:"15px  20px"})} onClick={() => {setStateSelectMinute(145)}} variant="outlined">145 Minutes</Button>

           </div>

           <div style={({height:"50px"})}></div>
           {selectedMinute === -1 
            ? <div></div> :

            
            <Button onClick={() =>              
                displayRazorpay((selectedMinute * 30), userInformation?.username, userInformation?.email, userInformation?.phoneNumber)}
             variant="contained"
             sx={({
                padding:"15px 50px"
             })}
             >
             Pay Rs. {(selectedMinute * 30)} 
             </Button>
            }
             
            
        
           
        
        </div>
    )
    function loadScript(src: string) {
        return new Promise((resolve) => {
            const script = document.createElement("script");
            script.src = src;
            script.onload = () => {
                resolve(true);
            };
            script.onerror = () => {
                resolve(false);
            };
            document.body.appendChild(script);
        });
    }

async function displayRazorpay(amt : number,  username : string | undefined, email: string | undefined, phoneNumber:number | undefined) {

    const paisa = amt * 100;

    const res = await loadScript(
        "https://checkout.razorpay.com/v1/checkout.js"
    );

    if (!res) {
        alert("Razorpay SDK failed to load. Are you online?");
        return;
    }
    //TODO  get username and password information - create function
    const options = {
        key: "rzp_live_Jx713b19r7hQWE", // Enter the Key ID generated from the Dashboard
        amount: paisa,
        currency: "INR",
        name: username,
        // description: "Test Transaction",
        // image: { logo },
        // order_id: order_id,
        handler: async function (response: { razorpay_payment_id: string; razorpay_order_id: string; razorpay_signature: string; }) {
            const data = {
                // orderCreationId: order_id,
                razorpayPaymentId: response.razorpay_payment_id,
                razorpayOrderId: response.razorpay_order_id,
                razorpaySignature: response.razorpay_signature,
            };
            console.log("data "+data);
            // alert(result.data.msg);
        },
        prefill: {
            name:  username,  
            email: email,
            contact: phoneNumber,
        }, 
        theme: {
            color: "#61dafb",
        },
    };

    const paymentObject = new (window as any).Razorpay(options);

    paymentObject.open();

    const result = await axios.post(`http://localhost:5000/payment/${paisa}`,  {
        "amount" : paisa,
    });
    
    console.log("result ----------   "+ result);
    if (result.status !== 200) {
        alert("Payment failed");
        navigate("/")
        return;
    } else{
        navigate("/chatbox")
    }
}

}

interface durationTimeInMinute {
    minute : number;
    onClick : React.MouseEventHandler<HTMLDivElement>;
}

interface HoursAndMinutes {
    hr : number;
    mn : number;
}

const getHoursAndNumbersFromMinutes = (minutes : number) : HoursAndMinutes  =>  {
    const hr = Math.floor(minutes / 60);
    const mn = minutes % 60;
    return { hr, mn };
};


var finalMinute : string;
const DurationCardComponent : React.FC<durationTimeInMinute> = ({minute, onClick}) => {

    
    if(minute >= 60 ){
        const {hr, mn} =  getHoursAndNumbersFromMinutes(minute);
        finalMinute = `${hr} hour ${ mn === 0 ? "" : `${mn} minutes`}`;
    } else {
        finalMinute = `${minute} minutes`;
    }


    return (
        <div onClick={onClick} style={({ cursor:"pointer", margin:"10px 8px", backgroundColor:"#282c34", borderRadius:"15px", border:"2px solid black", color:"white", padding:"10px 15px",   display: "inline-flex", justifyContent:"center", alignItems:"center"})}>
        {finalMinute} 
    </div>
    )
}



export default SelectDurationPage;
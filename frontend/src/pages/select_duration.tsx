import axios from "axios";
import { doc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../components/firebase";
import { getDoc } from "firebase/firestore/lite";
import { useNavigate } from "react-router-dom";
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
        <div style={({display:"flex", flexDirection:"column", justifyContent: "center", height: "80vh", alignItems:"center"})}>

            <h1>
                Select Duration of Chat
            </h1>

           <div style={({display:"flex", flexDirection:'row', justifyContent:"space-evenly"})}>
           <DurationCardComponent onClick={() => {setStateSelectMinute(10)}} minute={10} />
           <DurationCardComponent onClick={() => {setStateSelectMinute(30)}} minute={30} />
           <DurationCardComponent onClick={() => {setStateSelectMinute(60)}} minute={60} />
           <DurationCardComponent onClick={() => {setStateSelectMinute(120)}} minute={120} />
           <DurationCardComponent onClick={() => {setStateSelectMinute(145)}} minute={145} />
           </div>
           <div style={({height:"50px"})}></div>
           {selectedMinute === -1 
            ? <div></div> : 
                <div onClick={() =>              
                    displayRazorpay((selectedMinute * 30), userInformation?.username, userInformation?.email, userInformation?.phoneNumber)
                }
            //  style={({ display:"flex", padding:"10px 20px", background:"#282c34", color:"white", borderRadius:"8px"})}
            style={({ padding:"10px 20px", cursor:"pointer",  background:"#282c34", paddingBottom:"10px" , color:"white", borderRadius:"8px", display: "inline-flex",  })}
            >
              Pay Rs. {(selectedMinute * 30)} 
              </div> 
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
        key: "rzp_live_LnEKJ9oG6oOIo7", // Enter the Key ID generated from the Dashboard
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
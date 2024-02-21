import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
import Razorpay from "razorpay";


const SelectDurationPage = () => {

const [selectedMinute, setStateSelectMinute] = useState(-1);
 
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

  
           {/* <h1>
            {selectedMinute === -1 ? "" : selectedMinute}
           </h1> */} 
           <div style={({height:"50px"})}></div>


           {selectedMinute === -1 
            ? <div></div> :  <Link style={({padding:"10px", width:"250px" })} to={"/predefined_questions"} ><div onClick={() => displayRazorpay((selectedMinute * 30), "username", 9898654526, "username@gmail.com")}
            //  style={({ display:"flex", padding:"10px 20px", background:"#282c34", color:"white", borderRadius:"8px"})}
            style={({ padding:"10px 20px",  background:"#282c34", paddingBottom:"10px" , color:"white", borderRadius:"8px", display: "inline-flex",  })}
            >
              Pay Rs. {(selectedMinute * 30)} 
              </div> </Link> }

             

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

async function displayRazorpay(amt : number, username : string, contactNumber : number, email : string) {

    const paisa = amt * 100;

    const res = await loadScript(
        "https://checkout.razorpay.com/v1/checkout.js"
    );

    if (!res) {
        alert("Razorpay SDK failed to load. Are you online?");
        return;
    }
    const result = await axios.post(`http://localhost:5000/payment/${paisa}`,  {
        "amount" : paisa,
    });

    if (!result) {
        alert("Server error. Are you online?");
        return;
    }

    const options = {
        key: "rzp_test_e9rJ7RKXychhxc", // Enter the Key ID generated from the Dashboard
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

            // alert(result.data.msg);
        },
        prefill: {
            name: username,
            email: email,
            contact: contactNumber,
        }, 
        theme: {
            color: "#61dafb",
        },
    };
    const paymentObject = new (window as any).Razorpay(options);
    paymentObject.open();
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
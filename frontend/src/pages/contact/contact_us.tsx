import { useState } from "react";
import "../contact/contact_us.css";

const ContactUs = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNo, setPhoneNo] = useState('');
    const [message, setMessage] = useState('');

    
    return (    
        <div className="contact_us_main">

            {/* <img> </img> */}

            <div className="contact_us_content">
                <h4>Contact</h4>
              
                    <div className="label_and_input">
                        <label htmlFor="name">Name:</label>
                        <input type="text" className="input_field" id="name" name="name" value={name} onChange={(e) => {setName(e.target.value)}}/>
                    </div>

                    <div className="label_and_input"> 
                        <label htmlFor="email">Email:</label>
                        <input type="email" className="input_field" id="email" name="email" value={email} onChange={(e) => {setEmail(e.target.value)}}/> 
                    </div>

                    <div className="label_and_input"> 
                        <label htmlFor="phone">Phone Number:</label>
                        <input type="tel" id="phone" className="input_field" name="phone" value={phoneNo} onChange={(e) => {setPhoneNo(e.target.value)}}/> 
                    </div>

                    <div style={({display:"flex",  flexDirection:"column", alignItems:"start", width:"320px"})}>  
                        <label htmlFor="message">Message:</label>
                        <textarea id="message" name="message" rows={5} className="input_field_message" value={message} onChange={(e) => {setMessage(e.target.value)}}></textarea> 
                    </div>

                    <div className="submit_button" onClick={() => {
                        console.log("NAME   ===     "+ name);
                        console.log("EMAIL   ===     "+ email);
                        console.log("PHONE NO   ===     "+ phoneNo);
                        console.log("MESSAGE   ===     "+ message);
                    }}>
                        Submit
                    </div>
                
            </div>

        </div>
    )
}

export default ContactUs;
import { useState } from "react";
import "../contact/contact_us.css";
import contact_us from "../../assets/cwl_3.jpeg";

const ContactUs = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNo, setPhoneNo] = useState('');
    const [message, setMessage] = useState('');

    
    return (    
        <div className="contact_us_main">

            <div className="image-container">
                <img src={contact_us} alt="contact_us_img" />
            </div>

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

                    <div className="label_and_input"> 
                        <label htmlFor="message">Message:</label>
                        <textarea style={({width:"100%"})} rows={5} id="message" className="input_field_message"  name="message" value={message} onChange={(e) => {setMessage(e.target.value)}}/> 
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
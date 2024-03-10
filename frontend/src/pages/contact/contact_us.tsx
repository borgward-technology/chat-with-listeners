import "../contact/contact_us.css";

const ContactUs = () => {
    return (    
        <div className="contact_us_main">

            {/* <img> </img> */}

            <div className="contact_us_content">
                <h4>Contact</h4>
              
                    <div className="label_and_input">
                        <label htmlFor="name">Name:</label>
                        <input type="text" className="input_field" id="name" name="name" />
                    </div>

                    <div> <label htmlFor="email">Email:</label>
                    <input type="email" className="input_field" id="email" name="email" /> </div>

                    <div> <label htmlFor="phone">Phone Number:</label>
                    <input type="tel" id="phone" className="input_field" name="phone" /> </div>

                    <div>  <label htmlFor="message">Message:</label>
                    <textarea id="message" name="message" rows={5} style={({height:"100px", resize:"vertical", borderRadius:"8px", padding:"8px"})}></textarea> </div>
                

            </div>

        </div>
    )
}

export default ContactUs;
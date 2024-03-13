import "../about/about_us.css";
import about_us_img from "../../assets/cwl_1.jpeg";

const AboutUs = () => {
    return (



        <div className="about_us_container">
        
        <div className="about_us_image-column">
          <img
            src={about_us_img}
            alt="About_us_photo"
            className="image"
          />
        </div>
       

            <div className="about_us_content-container">    
                 <h2 style={({fontSize:"30px", fontWeight:"bold"})}>About Us</h2>
                 <h3 style={({fontSize:"18px", fontWeight:"500"})}>Someone who listens carefully, attentively, and sympathetically, typically imparting support and understanding to the speaker:</h3>

                 <h5 style={({fontSize:"18px", fontWeight:"500"})}>
                     We provide a Safe | Secure | Anonymous platform to talk  about your life problems with members & professionals 
                     It is all anonymous, safe and secure
                     Talk to experienced psychologists and AI
                     You always have someone to listen (24x7)
                     Freely express your problems
                 </h5>
            </div>
      
    </div>

    )
}

export default AboutUs;
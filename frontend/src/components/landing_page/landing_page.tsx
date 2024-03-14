import { useNavigate } from "react-router-dom";
import landing_photo from "../../assets/landing_page_girl_img.jpg";
import '../landing_page/landing_page.css';
 
const LandingPage = () => {

  const navigate = useNavigate();

    return (

    <div className="landing_page_1_container">
        
        <div className="image-column">
          <img
            src={landing_photo}
            alt="landing_photo"
            className="image"
          />
        </div>
       
        <div className="text-column">
                <h1>
                       Unlock your thoughts with "Listener"
                    </h1>
                     <h3>
                         A Safe space to Express, Connect and Unburden
                     </h3>
                     <h5>
                         Welcome to chat with listener, your dedicated platform for genuine, confidential conversations. In a world that's always buzzing, we provide  you with a unique  opportunity to express yourself freely, unfiltered.
                     </h5>

                     <div  className="landing_page_cta" onClick={() => navigate('/chatnow')}
                       >
                        Chat Now
                    </div>

                     {/* <Link to="/chatnow" style={{ textDecoration: 'none', cursor:"pointer", color: 'inherit' }}>  <button style={({padding:"10px", width:"250px", color:"white", background:"#171717" })} >  Chat Now </button></Link>  */}
    
        </div>
      
    </div>
       
       
      
   )



}



export default LandingPage;
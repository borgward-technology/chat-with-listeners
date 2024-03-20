import { useNavigate } from "react-router-dom";
import '../landing_page/landing_page.css';
import video1 from "../../assets/chat_with_listerner_vid_1.mp4";
import landing_photo from "../../assets/landing_page_girl_img.jpg";
import { useEffect, useState } from "react";
 

const LandingPage = () => {

  const navigate = useNavigate();

  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 800);


  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 800);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

    return (
    <div className="landing_page_1_container">
    <video src={video1} autoPlay loop muted></video>
    <div className="overlay">
    {isSmallScreen ? <div></div>  : <div className="image-column">
          <img
            src={landing_photo}
            alt="landing_photo"
            className="image"
          />
        </div>}
        
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
        </div>
      </div>
    </div>
   )



}



export default LandingPage;
import gmailLogo from "../assets/gmail_logo.png"
import instLogo from "../assets/instagram_logo.jpg";
import ytLogo from "../assets/yt_logo.jpg";

import "../components/footer.css";
import { useNavigate } from "react-router-dom";


const Footer = () => {
  const navigate = useNavigate();

  const redirectToYouTubeChannel = () => {
    const youtubeChannelURL = 'https://www.youtube.com/channel/UCK7el2hWiSAbrDkvfkEIZgg';
    window.open(youtubeChannelURL, '_blank');
  };

  const redirectToTermsAndConditions = () => {
    const youtubeChannelURL = 'https://www.youtube.com/channel/UCK7el2hWiSAbrDkvfkEIZgg';
    window.open(youtubeChannelURL, '_blank');
  };

  const redirectToMetaChannel = () => {
    const youtubeChannelURL = 'https://www.youtube.com/channel/YOUR_CHANNEL_ID';
    window.open(youtubeChannelURL, '_blank');
  };

  const redirectToInstagramChannel = () => {
    const youtubeChannelURL = 'https://www.instagram.com/listenerwithchat/';
    window.open(youtubeChannelURL, '_blank');
  };

  const redirectToGmailChannel = () => {
      const email = 'Info@chatwithlistener.com';
      window.location.href = `mailto:${email}`;
  };




  return (

    <div className="footer_class">

      <div  className="footer_content">
        <h2>Chat With Listener</h2>
       <div className="footer_HAC">
        <h4 className="footer_item" onClick={()=>{navigate("/")}}>Home</h4>
        <h4 className="footer_item" onClick={()=>{navigate("/about")}}>About Us</h4>
        <h4 className="footer_item" onClick={()=>{navigate("/contact")}}>Contact</h4>
        <h4 className="footer_item" onClick={()=>{navigate("/termsandconditions")}}>Terms And Conditions</h4>
        <h4 className="footer_item" onClick={()=>{navigate("/howitworks")}}>How it Works</h4>


       </div>
        {/* <h4 className="footer_item" onClick={()=>{navigate("/")}}>Contact</h4> */}

      </div>

      <div className="all_logos">

        <img className="logo" src={gmailLogo} alt="Gmail Logo" onClick={redirectToGmailChannel}/>
        {/* <img className="logo"src={metaLogo} alt="meta Logo" onClick={redirectToMetaChannel}/> */}
        <img className="logo" src={instLogo} alt="insta Logo" onClick={redirectToInstagramChannel}/>
        <img className="logo" src={ytLogo} alt="yt Logo" onClick={redirectToYouTubeChannel}/>

      </div>

    </div>
    

  )
};

export default Footer;
import { Link } from "react-router-dom";
import landing_photo from "../assets/landing_page_girl_img.jpg";

const LandingPage = () => {

    return (
        <div style={({display: "flex", justifyContent: 'space-between', maxWidth: "100%", alignItems: 'center', height:'600px' })}>
           <div style={{flex:2}}>
            <div style={({flexDirection:"column", padding:"20px"})}>
                    <h1>
                        Unlock your thoughts with "Listener"
                    </h1>
                    <h3>
                        A Safe space to Express, Connect and Unburden
                    </h3>
                    <h5>
                        Welcome to chat with listener, your dedicated platform for genuine, confidential conversations. In a world that's always buzzing, we provide  you with a unique  opportunity to express yourself freely, unfiltered.
                    </h5>

                    <Link to="/chatnow" style={{ textDecoration: 'none', cursor:"pointer", color: 'inherit' }}>  <button style={({padding:"10px", width:"250px", color:"white", background:"#171717" })} >  Chat Now </button></Link> 
                </div>
           </div>
           <div style={{ flex: 1 }}>
                <div>
                    <img src={landing_photo} alt='landing_img' style={({
                        margin: '0 5px', // Adjust spacing between images
                        maxWidth: '100%', // Ensure images don't exceed their container width
                        height: '80%', // Allow images to scale while maintaining aspect ratio
                    })}/>
                </div>
            </div>
        </div>
    )



}



export default LandingPage;
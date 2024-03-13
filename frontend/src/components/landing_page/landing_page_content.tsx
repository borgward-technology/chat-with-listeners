import connectImageLive from "../../assets/cwl_4.jpeg";
import freedomSpeakMind from "../../assets/cwl_5.jpeg";
import chatBoxImage from "../../assets/cwl_2.jpeg";
import "../landing_page/landing_page_2.css";
import Card from "@mui/joy/Card";
import AspectRatio from "@mui/joy/AspectRatio";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/joy/Typography/Typography";
import { useEffect, useState } from "react";




const LandingPageContentTwo = () => {

    const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 800);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 800);
    };

    window.addEventListener('resize', handleResize);

    // Cleanup function to remove the event listener when the component unmounts
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

    return (
        <div style={({display:"flex", flexDirection:"column", zIndex:0, justifyContent:'center', alignItems:'center'})}>

            <ContentWithImage 
                heading={ 'Connect, Share, Relieve:'} 
                subheading={'At Chat With Listener, we believe in the power of conversation. After a simple payment process, you gain access to a dedicated chat session, where you can open up without any reservations. Your time is precious, and so is your voice – let it be heard.'} 
                imgUrl={connectImageLive} 
                shouldVertical = {isSmallScreen}
            />

            <ContentWithImage 
                heading={  'Chatbox Confidentiality: '} 
                subheading={ 'Our secure chatbox is designed to be your personal confidant. Pour out your thoughts, feelings, and emotions without fear of judgment. Our trained listeners are here to provide a compassionate and understanding ear, ensuring you feel heard and supported.'} 
                imgUrl={chatBoxImage} 
                shouldVertical = {isSmallScreen}
            />

            <ContentWithImage 
                heading={ 'Freedom to Speak Your Mind:'} 
                subheading={'Unlike other platforms, we encourage you to speak freely. Whether you\'re seeking advice, sharing your joys, or unloading your worries, Chat With Listener is your judgment-free zone. Let your thoughts flow, knowing that you\'re in a safe space.'} 
                imgUrl={freedomSpeakMind} 
                shouldVertical = {isSmallScreen}
            />  
        </div>
    )


}

const ContentWithImage : React.FC<ContentWithImageComponent> = ({heading, subheading, imgUrl, shouldVertical}) => 

 {
    return (
        <Card
            variant="outlined"
            orientation={ shouldVertical ? "vertical" : "horizontal"}
            sx={{
                margin:"20px 0",
                alignItems:"center",
                justifyContent:"center",
                width: ( shouldVertical ? "50%" : "70%"),
                '&:hover': { boxShadow: 'md', borderColor: 'neutral.outlinedHoverBorder' },
            }}>
                
        <AspectRatio ratio="2" sx={{ width: "100%" }}>
          <img
            src={imgUrl}
            loading="lazy"
            alt=""
          />
        </AspectRatio>

        <CardContent>
            
          <Typography level="title-lg" id="card-description" sx={{margin:"25px 0",  fontSize:"26px", fontWeight:"700"}}>
            {heading}
          </Typography>

          <Typography level="body-sm" aria-describedby="card-description" mb={1}>
          {subheading}
          </Typography>

        </CardContent>
      </Card>
    );
  };
  




// {
//     return (
//     <div style={({ backgroundColor:"teal", display: "flex", justifyContent: 'space-between', maxWidth: "100%", alignItems: 'center', marginTop:'150px', marginBottom:'150px' })}>
//                         <div style={{flex:2}}>
//                             <div style={({flexDirection:"column", padding:"50px"})}>
//                                 <h1>
//                                 {heading}
//                                 </h1>
//                                 <h3>
//                                 {subheading}
//                                </h3>
                    
//                             </div>
//                     </div>
//                     <div style={{ flex: 1 ,  backgroundColor:"red", alignContent:'center', justifyContent:"center", alignItems:'center'}}>
//                             <div>
//                                 <img src={imgUrl} alt='landing_img' style={( {
//                                     margin: '0 5px', 
//                                     maxWidth: '60%',
//                                     maxHeight:'50%',
//                                     // height: 'auto',
//                                 })}/>
//                             </div>
//                         </div>
//                     </div>
//         )

// }

interface ContentWithImageComponent {
    heading : string,
    subheading : string,
    imgUrl : string,
    shouldVertical : boolean,
}



export default LandingPageContentTwo;
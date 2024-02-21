import connectImageLive from "../assets/connect_share_reliev.jpg";
import freedomSpeakMind from "../assets/freedom_speak_mind.jpg";
import chatBoxImage from "../assets/cha_box.jpg";


const LandingPageContentTwo = () => {
    return (
        <div style={({display:"flex", flexDirection:"column"})}>

<ContentWithImage heading={ 'Connect, Share, Relieve:'} subheading={'At Chat With Listener, we believe in the power of conversation. After a simple payment process, you gain access to a dedicated chat session, where you can open up without any reservations. Your time is precious, and so is your voice – let it be heard.'
                                } imgUrl={connectImageLive}/>




                    <div style={({display: "flex", justifyContent: 'space-between', maxWidth: "100%", alignItems: 'center' })}>
                    
                    <div style={{ flex: 1 }}>
                            <div style={({paddingLeft:"50px",    maxWidth: '80%', maxHeight:'50%',})}>
                                <img src={chatBoxImage} alt='landing_img' style={( {
                                    margin: '0 5px', 
                                    maxWidth: '80%',
                                    height: 'auto',
                              
                                })}/>
                            </div>
                    </div>
                    <div style={{flex:2}}>
                            <div style={({flexDirection:"column", padding:"20px"})}>
                                <h1>
                                'Chatbox Confidentiality: '
                                </h1>
                                <h3>
                                'Our secure chatbox is designed to be your personal confidant. Pour out your thoughts, feelings, and emotions without fear of judgment. Our trained listeners are here to provide a compassionate and understanding ear, ensuring you feel heard and supported.'
               </h3>
                    
                            </div>
                    </div>
                    </div>


                    <ContentWithImage heading={ 'Freedom to Speak Your Mind:'} subheading={'Unlike other platforms, we encourage you to speak freely. Whether you\'re seeking advice, sharing your joys, or unloading your worries, Chat With Listener is your judgment-free zone. Let your thoughts flow, knowing that you\'re in a safe space.'} imgUrl={freedomSpeakMind}/>

                   

                    
        </div>
    )


}

const ContentWithImage : React.FC<ContentWithImageComponent> = ({heading, subheading, imgUrl}) => {
    return (
    <div style={({display: "flex", justifyContent: 'space-between', maxWidth: "100%", alignItems: 'center', marginTop:'150px', marginBottom:'150px' })}>
                        <div style={{flex:2}}>
                            <div style={({flexDirection:"column", padding:"50px"})}>
                                <h1>
                                {heading}
                                </h1>
                                <h3>
                                {subheading}
                               </h3>
                    
                            </div>
                    </div>
                    <div style={{ flex: 1 }}>
                            <div>
                                <img src={imgUrl} alt='landing_img' style={( {
                                    margin: '0 5px', 
                                    maxWidth: '60%',
                                    maxHeight:'50%',
                                    // height: 'auto',
                                })}/>
                            </div>
                        </div>
                    </div>
        )

}

interface ContentWithImageComponent {
    heading : string,
    subheading : string,
    imgUrl : string,
}



export default LandingPageContentTwo;
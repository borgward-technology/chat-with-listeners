
import { useNavigate } from "react-router-dom";

const ChatNowPage = () => {

    const navigate = useNavigate();

    const handleChatButtonClick = () => {
        navigate("/selecttype");
    }
    
    return (
        <div style={({display:"flex", flexDirection:"column", justifyContent: "center", height: "80vh", alignItems:"center"})}>
            <h1 style={({color:"black"})}> Please Select below option of Conversation</h1>
            <div style={({height:"50px"})}></div>
           <div style={{display:"flex",  flexDirection:"row"}}>
                <div onClick={()=>{
                    alert("Call feature is not yet available please select other option.");
                }} style={({backgroundColor:"#171717", padding:"10px 20px", display:"inline-block", color:"#fff", border:"none", borderRadius:"4px", cursor:"pointer", textAlign:"center", textDecoration:"none", transition:"backgroundColor 0.3s ease"})}>Call</div>
                <div style={({width:"50px"})}></div>
                <div onClick={handleChatButtonClick} style={({backgroundColor:"#171717", padding:"10px 20px", display:"inline-block", color:"#fff", border:"none", borderRadius:"4px", cursor:"pointer", textAlign:"center", textDecoration:"none", transition:"backgroundColor 0.3s ease"})}>Chat</div>
           </div>
        </div>
    );


    
}




export default ChatNowPage;
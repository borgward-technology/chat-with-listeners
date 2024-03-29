import {  useEffect, useRef, useState } from "react";
import "./chat_box_page.css";
import { useLocation, useNavigate } from "react-router-dom";


type DateTime = {
    date: Date;
    time: string; 
};

interface ChatContent {
    message : string,
    sendAt : DateTime,
    fromUser : boolean,
}
const ChatBoxComponent = () => {
    
    const navigate = useNavigate();
    const location = useLocation();
    const chatBoxTime = location.state?.chatBoxTime;
    const [inputValue, setText] = useState("");
    const [chatList, setAddToChatList] = useState<ChatContent[]>([]);
    const [selectedResponse, setSelectedResponse] = useState('');    

    const handleOnChangeEvent = (event : React.ChangeEvent<HTMLInputElement>) => {
        setText(event.target.value);
    }

    const addChatToList = () => {
        const responses = [
            "Ok.",
            "I got you.",
            "Yes",
            "Hmm...",
            
          ];
        const currentDate: Date = new Date();
        const currentTime: Date = new Date();
        const currentHours: number = currentTime.getHours();
        const currentMinutes: number = currentTime.getMinutes();
        const currentSeconds: number = currentTime.getSeconds();


        console.log(`hourse -> ${currentHours} Minutes -> ${currentMinutes} seconds -> ${currentSeconds}`);
        const dateNow : DateTime = {
            date : currentDate,
            time : `${currentHours}:${currentMinutes}`,
        }
        const newMessage : ChatContent = {
            message: inputValue,
            sendAt:dateNow,
            fromUser: true,
        }

        const randomIndex = Math.floor(Math.random() * responses.length - 1);
    console.log("selectedResponse   ----    "+selectedResponse);

        setSelectedResponse(responses[randomIndex]);

    console.log("selectedResponse   ----    "+selectedResponse);


        if(newMessage.message !== "") {
            setAddToChatList( chatList => [...chatList, newMessage]);
        }

       

         // After 3 seconds, add another chat content item
        setTimeout(() => {
            const botMessage : ChatContent = {
                message:selectedResponse,
                sendAt:dateNow,
                fromUser: false,
            }

            if(selectedResponse !== ''){
                setAddToChatList(  chatList => [...chatList, botMessage]);
            }
            
        }, 3000);
        setText('');
    }

        const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
            if (e.key === 'Enter') {
                e.preventDefault();
                addChatToList();
            }
        };
    
        const chatContainerRef = useRef<HTMLDivElement>(null);
        const scrollToBottom = () => {
            if (chatContainerRef.current) {
                chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
            }
        };

        const [secondsLeft, setSecondsLeft] = useState<number>(chatBoxTime * 60);

        useEffect(() => {
            scrollToBottom();
        });

        useEffect(() => {   
           if(chatBoxTime === 1){
            const timer = setInterval(() => {
                setSecondsLeft((prevSeconds) => prevSeconds - 1);
            }, 1000);
          return () => clearInterval(timer);
        }
        }, []);

        useEffect(() => {
           if(chatBoxTime === 1){
            const timer = setTimeout(() => {
                alert('1 Minute is completed, you will get redirected to home page.'); 
                navigate('/');
              }, 60000);
            return () => clearTimeout(timer);
           }
        }, []);



    return ( 
        <div className="main_container" style={({marginTop:"150px"})}>
           {/* { secondsLeft !== null ? <h1>{secondsLeft}</h1> : <div></div>} */}
           {(chatBoxTime === 1 ||chatBoxTime === 10 ||chatBoxTime === 30 ||chatBoxTime === 60 || chatBoxTime === 120 || chatBoxTime === 145) && <p>Timer: {secondsLeft} seconds</p>}
            <div className="chat_box_container">
                <div ref={chatContainerRef} className="chat_list_container">
                {(chatList.length === 0) 
                 ?  <div style={({display:"flex", width:"100%", fontWeight:"700", justifyContent:"center", alignItems:"center", alignContent:"center", height:"60vh"})}>No Message yet, please start Chatting</div>  
                 :  chatList.map((item, index) => (
                
                            <div key={index} style={({ color:item.fromUser ? 'black':'white',  float:  item.fromUser ? 'right' : 'left',  clear: 'both', overflow:'hidden', backgroundColor: item.fromUser ? "aqua" : "gray",  margin:"10px 20px", padding:"10px 20px", borderRadius:"8px 8px 0 8px"})}>{item.message}</div>
                ))}
                </div>

                <div className="container">
                    <div className="row">
                        <input  value={inputValue} onChange={handleOnChangeEvent} onKeyDown={handleKeyPress} type="text" className="text-field" placeholder="Enter your message" />
                        <button className="send-button"  onClick={addChatToList}>Send</button>
                    </div>
                </div>
                
            </div>
        </div>


    )
}

export default ChatBoxComponent;
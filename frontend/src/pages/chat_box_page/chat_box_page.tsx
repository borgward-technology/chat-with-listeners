import {  useEffect, useRef, useState } from "react";
import "./chat_box_page.css";


type DateTime = {
    date: Date;
    time: string; 
};

interface ChatContent {
    message : string,
    sendAt : DateTime,
}
const ChatBoxComponent = () => {

    const [inputValue, setText] = useState("");
    const [chatList, setAddToChatList] = useState<ChatContent[]>([]);

    const handleOnChangeEvent = (event : React.ChangeEvent<HTMLInputElement>) => {
        setText(event.target.value);
    }

    const addChatToList = () => {
        const currentDate: Date = new Date();
        const currentTime: Date = new Date();
        const currentHours: number = currentTime.getHours();
        const currentMinutes: number = currentTime.getMinutes();
        const currentSeconds: number = currentTime.getSeconds();
        console.log(`hourse -> ${currentHours} Minutes -> ${currentMinutes} seconds -> ${currentSeconds}`)
        const dateNow : DateTime = {
            date : currentDate,
            time : `${currentHours}:${currentMinutes}`,
        }
        const newMessage : ChatContent = {
            message: inputValue,
            sendAt:dateNow
        }
        console.log(`newMessage   ->>    ${newMessage}`);
        setAddToChatList([...chatList, newMessage]);
        setText('');
    }

        // Function to handle Enter key press
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

            // Scroll to bottom when chatList changes
        useEffect(() => {
            scrollToBottom();
        }, [chatList]);


    return (
        <div className="main_container">
            <h1>Chat Box</h1>

            <div className="chat_box_container">

                <div ref={chatContainerRef} className="chat_list_container">
                {(chatList.length === 0) 
                 ?  <div style={({display:"flex", fontWeight:"700", justifyContent:"center", alignItems:"center", alignContent:"center", height:"60vh"})}>No Message yet, please start Chatting</div>  
                 :  chatList.map((item, index) => (
                        <div key={index} className="list_item">{  item.message}</div>
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
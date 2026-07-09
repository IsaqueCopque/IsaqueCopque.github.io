import { useState } from "react"
import ChatButton from "./ChatButton";
import ChatWindow from "./ChatWindow";
import ChatMessage from "./models/ChatMessage";

const Chat = () => {
    const apiUrl = process.env.REACT_APP_API_URL;

    const [chatOpen, setChatOpen] = useState(false);
    const [messages, setMessages] = useState([]);
    const [waitingResponse, setWaitingResponse] = useState(false);

    const sendMessage = async (text) => {
        try{
            setWaitingResponse(true);
            const response = await fetch(apiUrl, {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify({question:text}),
            });
            if (!response.ok) throw new Error();

            const data = await response.json();

            const responseMessage = new ChatMessage({
                isSending: false,
                isError: false,
                text: data.answer,
                timestamp: new Date(),
            });

            setMessages((prev) => [...prev, responseMessage]);
        }catch(error){
            console.log(error);
            setMessages((prev) => [
                ...prev,
                new ChatMessage({isSending: false, isError: true, text: "Unable to connect to the server."})
            ])
        }finally{
            setWaitingResponse(false);
        }
    }

    const addMessage = (messageText) => {
        if (messageText.trim().length < 2) return;

        const message = new ChatMessage({isSending: true, text: messageText,
                timestamp: new Date()});
        setMessages((prev)=>[...prev, message]);
        sendMessage(messageText);
    }

    return <>
        <ChatButton changeState={setChatOpen} currentState={chatOpen}/>
        {chatOpen && <ChatWindow onMessageAdd={addMessage} messagesList={messages} waitingResponse={waitingResponse}/>}
    </>;
}

export default Chat
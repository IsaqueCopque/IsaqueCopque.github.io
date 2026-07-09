import { BsChatDots } from "react-icons/bs";

const ChatButton = ({changeState, currentState}) => <>
    <div className="chat_button" onClick={()=>changeState(!currentState)}>
      <BsChatDots size={'1.5rem'} />
      <p>Chat</p>
    </div>
</>;

export default ChatButton
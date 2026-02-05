import ChatMessage from "./ChatMessage";
import { useAutoScroll } from "../hooks/AutoScroll";
import '../css/ChatMessages.css'

export const ChatMessages= (props)=>{
    const {chats, setChats}= props;
    const chatMessages= useAutoScroll([chats])

    const submit= ()=>{
        // chats.push({
        //     message: "Will robot take over the World?",
        //     sender: "user",
        //     id: crypto.randomUUID()
        // })

        setChats([
            ...chats,
            {
                message: "Will robot take over the World?",
                sender: "user",
                id: crypto.randomUUID()
            }
        ])

        // console.log(chats)
    }

    return (
        <div
            className="chat-message-container"
            ref= {chatMessages}
        >
            <button
                onClick={submit}
                hidden= {true}
            >Submit</button>
            {(chats.length===0)
                ?<p
                    className="welcome-message"
                >
                    Welcome to the Chatbot project! Send a message using the textbox below
                </p>
                :chats.map((chat)=>(
                    <ChatMessage
                        message={chat.message}
                        sender={chat.sender}
                        time= {chat.time}
                        key= {chat.id}
                    />
            ))}
        </div>
    );

}
import { useEffect, useState} from 'react'
import './App.css'
import { InputMessage } from './components/InputMessage'
import { ChatMessages } from './components/ChatMessages';
import { Chatbot } from 'supersimpledev';

const App= ()=>{
    useEffect(()=>{
        Chatbot.addResponses({
            "Will Ai take over the World?" : "hasta la vista baby",
            "hi Hi": "Hello! How can I help you?",
            "fine good": "Nice to hear.",
            "waste no use not good bye": "Chala jaa B**k ",
            "provide me a unique id": function(){
                return (
                    <pre>
                        {`Yee ley\n id: ${crypto.randomUUID()}`}
                    </pre>
                )
            }
        })
    },[])
    const [chats, setChats]= useState(JSON.parse(localStorage.getItem("messages")) || [])
    useEffect(()=>{
        localStorage.setItem("messages", JSON.stringify(chats))
    },[chats])
    return(
        <div className="app">
            <ChatMessages
                chats= {chats}
                setChats= {setChats}
            />
            <InputMessage
                chats= {chats}
                setChats= {setChats}
            />
        </div>
    )
};


export default App

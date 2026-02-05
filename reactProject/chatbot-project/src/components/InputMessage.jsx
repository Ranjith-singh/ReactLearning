import { useState} from 'react'
import loadingImage from '../assets/hsaart-gradient-5812_256.gif'
import {Chatbot} from 'supersimpledev'
import '../css/InputMessage.css'
import dayjs from 'dayjs'

export const InputMessage= (props)=>{
    const {chats, setChats}= props
    const [inputValue, setInputValue]= useState('');
    const [isLoading, setIsLoading]= useState(false)
    
    const storeInput= (message, event)=>{
        // console.log(message);
        setInputValue(event.target.value);
    }
    const sendMessage= async()=>{
        // const response= Chatbot.getResponse(inputValue);
        if(inputValue.trim()===''){
            return
        }
        const newChats= [
            ...chats,
            {
                message: `${inputValue}`,
                sender: 'user',
                time: dayjs().valueOf(),
                id: crypto.randomUUID()
            }
        ]
        setChats(newChats)
        setInputValue('')
        const loadingImg= <img className="loading-spinner" src= {loadingImage} />

        setChats([
            ...newChats,
            {
                message: loadingImg,
                sender: "robot",
                id: crypto.randomUUID()
            }
        ])
        setIsLoading(true)

        const response= await Chatbot.getResponseAsync(inputValue);

        setChats([
            ...newChats,
            {
                message: response,
                sender: "robot",
                time: dayjs().valueOf(),
                id: crypto.randomUUID()
            }
        ])
        setIsLoading(false)
    }
    const keyStroke= (event)=>{
        if(event.key==='Enter'){
            sendMessage(event)
        }
        else if(event.key==='Escape'){
            setInputValue('')
        }
    }
    const clear= ()=>{
        localStorage.removeItem("messages");
        setChats([])
    }
    return (
    <div
        className= "user-input"
    >
        <input
            className="input-message"
            placeholder="type your query"
            onChange= {(event)=>(storeInput("hello", event))}
            onKeyDown= {keyStroke}
            value= {inputValue}
            disabled= {isLoading}
            size="30"
        />
        <button
            className="send-button"
            onClick={sendMessage}
        >
            Send
        </button>
        <button
            className="clear-button"
            onClick= {clear}
        >
            Clear
        </button>
    </div>
    )
}
import { useRef, useEffect } from "react";

export const useAutoScroll= (dependencies)=>{
    const chatMessages= useRef(null)
    useEffect(()=>{
        const curChats= chatMessages.current;
        if(curChats){
            curChats.scrollTop= curChats.scrollHeight;
        }
    },dependencies)
    return chatMessages
}
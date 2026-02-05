import dayjs from 'dayjs'
import '../css/ChatMessage.css'

const ChatMessage= ({message, sender, time})=>{
    const UserProfileImage= 'https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png'
    const RoboProfileImage= 'https://www.shutterstock.com/shutterstock/photos/2475457627/display_1500/stock-vector-robot-abstract-logo-modern-style-2475457627.jpg'
    return(
        <div className={
            (sender==='user')?'user-chat':'robot-chat'
        }>
            {sender === "robot" && (
                <img className="profile"
                    src= {RoboProfileImage}
                />
            )}
            <div className="message">
                <div>
                    {message}
                </div>
                <div className='chat-time'>
                    {dayjs(time).format("h:mma")}
                </div>
            </div>
            {sender === "user" && (
                <img className="profile"
                    src= {UserProfileImage}
                />
            )}
        </div>
    )
}

export default ChatMessage
import UserMessageCard from "./UserMessageCard"
import { useNavigate } from 'react-router-dom'

function UserMessage({messages, currentUser, addMessage, renderMessages, setRenderMessages}) {
    const navigate = useNavigate()
    const currentUserId = sessionStorage.getItem('user_id')
    // console.log(currentUserId)

    function handleBack() {
        navigate("/")
    }

    return (
        <div>
            <button className="back-button" onClick={handleBack}>🔙</button>
            <div>
                {/* <h2>Messages </h2> */}
                <div>{messages && messages.filter(message => message.receiver_id === currentUser.id)
                    .map(message => 
                    <UserMessageCard key={message.id} message={message} renderMessages={renderMessages} setRenderMessages={setRenderMessages} currentUser={currentUser} addMessage={addMessage}/>)}
                </div>
            </div>
        </div>
    )
}

export default UserMessage
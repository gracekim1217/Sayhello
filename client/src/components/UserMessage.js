import UserMessageCard from "./UserMessageCard"
import { useNavigate } from 'react-router-dom'


function UserMessage({messages, currentUser, addMessage, renderMessages, setRenderMessages}) {
    // console.log(messages.filter(message => message.receiver.id))
    // console.log(currentUser.posts)
    const navigate = useNavigate()

    // const [imgSrc, setImgSrc] = useState("Invalid Image Source");

    function handleBack() {
        navigate("/")
    }



    return (
        <div>
            <button className="back-button" onClick={handleBack}>🔙</button>
        <div>
        <h2>Messages </h2>
            <div>{messages && messages.filter(message => message.receiver_id === currentUser.id)
                .map(message => <UserMessageCard key={message.id} message={message} renderMessages={renderMessages} setRenderMessages={setRenderMessages} currentUser={currentUser} addMessage={addMessage}/>)}</div>
            {/* <div>{currentUser.posts && currentUser.posts.map(post => <UserMessageCard key={post.id} name={post.name} post={post} currentUser={currentUser} />)}</div> */}
        </div>
        </div>
    )
}

export default UserMessage
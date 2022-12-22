// import UserMessageCard from "./UserMessageCard"
import { useNavigate } from 'react-router-dom'


function UserMessage() {
    // console.log(currentUser)
    // console.log(currentUser.posts)
    const navigate = useNavigate()

    // const [imgSrc, setImgSrc] = useState("Invalid Image Source");

    function handleBack() {
        navigate("/")
    }



    return (
        <div>
            <button onClick={handleBack}>Back</button>
        <div>
        <h2>Posts </h2>
            {/* <div>{currentUser.posts && currentUser.posts.map(post => <UserMessageCard key={post.id} name={post.name} post={post} currentUser={currentUser} />)}</div> */}
        </div>
        </div>
    )
}

export default UserMessage
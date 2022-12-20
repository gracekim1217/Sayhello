import {Link} from 'react-router-dom'
import {useState} from 'react';


function DisplayProfile({currentUser, user}) {
    console.log(currentUser)
    const {id, username, first_name, last_name, photo} = currentUser
    const [imgSrc, setImgSrc] = useState("Invalid Image Source");


    return(
        <div>
            <img></img>
            <h3>{username}</h3>
            <img src={imgSrc} onError = {() => setImgSrc("https://i.pinimg.com/564x/20/0d/72/200d72a18492cf3d7adac8a914ef3520.jpg")} />
            <Link to={`/users/${id}`}><p>Posts</p></Link>
            {/* <Link to={}><p>Messages</p></Link> */}
        </div>
    )
}

export default DisplayProfile
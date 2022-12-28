import {Link} from 'react-router-dom'
// import {useState} from 'react';


function DisplayProfile({currentUser}) {
    const {id, username, first_name, last_name} = currentUser
    // const [imgSrc, setImgSrc] = useState("Invalid Image Source");
    // console.log(currentUser)


    return(
        <div>
            {/* <img></img> */}
            <h3>{username}</h3>
            <p> First Name : {first_name}</p>
            <p> Last Name : {last_name}</p>
            {/* <img src={imgSrc} onError = {() => setImgSrc("https://i.pinimg.com/564x/20/0d/72/200d72a18492cf3d7adac8a914ef3520.jpg")} /> */}
            <Link to={`/users/${id}/posts`}><p>Posts</p></Link>
            <Link to={`/users/${id}/messages`}><p>Messages</p></Link>
            {/* <Link to={`/users/${id}/profile`}><p>View Profile</p></Link> */}
        </div>
    )
}

export default DisplayProfile
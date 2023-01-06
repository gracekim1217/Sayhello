import {Link} from 'react-router-dom'
// import {useState} from 'react';


function DisplayProfile({currentUser}) {
    const {id, username, first_name, last_name} = currentUser
    // const [imgSrc, setImgSrc] = useState("Invalid Image Source");
    const currentUserId = sessionStorage.getItem('user_id')
    const currentUsername = sessionStorage.getItem('username')
    const currentFirstName = sessionStorage.getItem('first_name')
    const currentLastName = sessionStorage.getItem('last_name')
    
    console.log(currentUserId)

    return(
        
        <div>
            {/* <img></img> */}
            <h2 className="h3">☺︎ {currentUsername}</h2>
            <h4 className="h5"> First Name : {currentFirstName}</h4>
            <h4 className="h5"> Last Name : {currentLastName}</h4>
            {/* <img src={imgSrc} onError = {() => setImgSrc("https://i.pinimg.com/564x/20/0d/72/200d72a18492cf3d7adac8a914ef3520.jpg")} /> */}
            <Link to={`/users/${currentUserId}/posts`}><button className="link">Posts</button></Link>
            <Link to={`/users/${currentUserId}/messages`}><button className="link">Messages</button></Link>
            {/* <Link to={`/users/${id}/profile`}><p>View Profile</p></Link> */}
        </div>


    // <div>
    //     {/* <img></img> */}
    //     <h2 className="h3">☺︎ {username}</h2>
    //     <h4 className="h5"> First Name : {first_name}</h4>
    //     <h4 className="h5"> Last Name : {last_name}</h4>
    //     {/* <img src={imgSrc} onError = {() => setImgSrc("https://i.pinimg.com/564x/20/0d/72/200d72a18492cf3d7adac8a914ef3520.jpg")} /> */}
    //     <Link to={`/users/${id}/posts`}><button className="link">Posts</button></Link>
    //     <Link to={`/users/${id}/messages`}><button className="link">Messages</button></Link>
    //     {/* <Link to={`/users/${id}/profile`}><p>View Profile</p></Link> */}
    // </div>
    )
}

export default DisplayProfile
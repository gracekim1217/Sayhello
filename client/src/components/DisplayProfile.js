import {Link} from 'react-router-dom'

function DisplayProfile({currentUser}) {
    // const {id, username, first_name, last_name} = currentUser
    const currentUserId = sessionStorage.getItem('user_id')
    const currentUsername = sessionStorage.getItem('username')
    const currentFirstName = sessionStorage.getItem('first_name')
    const currentLastName = sessionStorage.getItem('last_name')
    // console.log(currentUserId)

    return(
        <div>
            <h2 className="h3">☺︎ {currentUsername}</h2>
            <h4 className="h5"> First Name : {currentFirstName}</h4>
            <h4 className="h5"> Last Name : {currentLastName}</h4>
            <Link to={`/users/${currentUserId}/posts`}><button className="link">Posts</button></Link>
            <Link to={`/users/${currentUserId}/messages`}><button className="link">Messages</button></Link>
            {/* <Link to={`/users/${id}/posts`}><button className="link">Posts</button></Link> */}
            {/* <Link to={`/users/${id}/messages`}><button className="link">Messages</button></Link> */}
        </div>
    )
}

export default DisplayProfile
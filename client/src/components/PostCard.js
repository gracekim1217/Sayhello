import {useNavigate} from 'react-router-dom'
import React, { useEffect } from 'react'



function PostCard({post, currentUser}) {
    const navigate = useNavigate()
    const {id, content, image, user, likes, comments } = post
    // const {first_name, last_name} = currentUser
    // const {username} = user
    // const {id, username} = users

    // console.log(post)
    // console.log(user.username)

    // useEffect(() => {
    //     fetch(`/users/${users.id}/posts`)
    //     .then(res => res.json())
    //     .then(posts => console.log(posts))
    // },[])

    function handleDelete() {
       fetch(`/posts/${id}`,{
         method:'DELETE',
        })
        // navigate('/')
        window.location.reload(false);
    }
  
      return (
        <>
        <div className="post">
            <div> {user.username} : {content}</div>
            {/* <p className="book-detail">Written in <i>{year}</i></p> */}
            {/* <button className="button"><Link id="edit-button" to={`/books/${id}/edit`}>Edit</Link></button> */}
            <button className="button" onClick={handleDelete}>✖️</button>
        </div>
      </>
    );
  }
  
  export default PostCard
import {useNavigate} from 'react-router-dom'
// import UserDetail from './UserDetail'
import React, { useEffect } from 'react'



function PostCard({post, currentUser}) {
    const navigate = useNavigate()
    const {id, content, image, user, likes, comments } = post
    // const {first_name, last_name} = currentUser
    // const {username} = user
    // const {id, username} = users

    // console.log(post)
    // console.log(post.user.username)

    // useEffect(() => {
    //     fetch(`/users/${users.id}/posts`)
    //     .then(res => res.json())
    //     .then(posts => console.log(posts))
    // },[])

    function handleDelete() {
       fetch(`/posts/${id}`,{
         method:'DELETE',
        })
        navigate('/')
        window.location.reload(false);
    }
  
      return (
        <>
        <div className="book">
          {/* <Link className="item-link" to={`/books/${id}`}> <h2>{title}</h2></Link> */}
            {/* <div><UserDetail/></div> */}
            <div className="book-detail"> {post.user.username} : {content}</div>
            {/* <p className="book-detail">Written in <i>{year}</i></p> */}
            {/* <button className="button"><Link id="edit-button" to={`/books/${id}/edit`}>Edit</Link></button> */}
            <button className="button" onClick={handleDelete}>✖️</button>
        </div>
      </>
    );
  }
  
  export default PostCard
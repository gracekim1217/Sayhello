import {useNavigate} from 'react-router-dom'
import React, { useEffect } from 'react'



function PostCard({post, currentUser, deletePost, handleUpdateLike}) {
    const navigate = useNavigate()
    const {id, content, image, user, like, comments, post_like } = post
    // console.log(post_like)

    function handleLikes() {
      const updateLikesObj = {
        post_like: post_like + 1,
      }

      fetch(`/posts/${id}`,{
        method:'PATCH',
        headers: {'Content-Type': 'application/json'},
        body:JSON.stringify(updateLikesObj),
        })
        .then(res => res.json())
        .then(data => handleUpdateLike(data));
    }
    
    // const {first_name, last_name} = currentUser
    // const {username} = user
    // const {id, username} = users

    // console.log(user.username)

    // console.log(post.likes.id)
    // console.log(user.username)

    // useEffect(() => {
    //     fetch(`/users/${users.id}/posts`)
    //     .then(res => res.json())
    //     .then(posts => console.log(posts))
    // },[])

    // function handleDelete() {
    //    fetch(`/posts/${id}`,{
    //      method:'DELETE',
    //     })
    //     deletePost(id);

        // .then((r) => r.json()) // this line will error out, because there is no JSON to parse!
        // .then((data) => deletePost(data));
        // navigate('/')
        // window.location.reload(false);
    // }
      // const commentMap = comments.map((comment) => (
      //   <div> {comment.user_id} : {comment.post_comment} </div>
      // ))
  
      return (
        <>
          <div className="post">
          {user ? ( <h3> {user.username} : {content} </h3> )  : null}
          {/* {user ? ( <div> 💖{like.post_like} </div> ) : null} */}
          {user ? ( <button onClick={handleLikes}> 💖 {post_like? post_like : 0 } </button> ) : null}
          {/* {user ? commentMap : null} */}

          {/* //   (<p>{likes}</p> */}
          {/* // )  */}
            
        
          {/* <p>comments : {comments}</p> */}
              {/* <div> {user?.username} : {content}</div> */}
              {/* <p className="book-detail">Written in <i>{year}</i></p> */}
              {/* <button className="button"><Link id="edit-button" to={`/books/${id}/edit`}>Edit</Link></button> */}
              {/* <button className="button" onClick={handleDelete}>✖️</button> */}
          </div>
        </>
    );
  }
  
  export default PostCard
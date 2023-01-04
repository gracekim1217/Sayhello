import {useNavigate} from 'react-router-dom'
import React, { useEffect, useState } from 'react'
import PostComment from './PostComment'
import { DateTime } from "luxon";

function PostCard({post, currentUser, deletePost, handleUpdateLike, renderPosts, setRenderPosts}) {
    const navigate = useNavigate()
    const [errors, setErrors] = useState([])
    const [input, setInput] = useState('')
    const {id, content, image, user, like, comments, post_like, created_at } = post
    // console.log(updated_at)
    // const [counter, setCounter] = useState(post_like);

    const [formData, setFormData] = useState({
      post_comment: "",
      user_id: sessionStorage.getItem('user_id'),
      post_id: id
    })

    const {post_comment, user_id, post_id} = formData


    const handleChange = (e) => {
      const { name, value } = e.target
      setFormData({ ...formData, [name]: value })
      setInput(e.target.value)
  }

  function handleLikes(e){
    e.preventDefault();
    fetch(`/posts/${id}`,{
    method:'PATCH',
    headers: {'Content-Type': 'application/json'},
    body:JSON.stringify({post_like: post_like +1})
    })
    .then(res => res.json())
    .then(() => {
        setRenderPosts(!renderPosts)
        // setEditing(false);

    })
  }

    // function handleLikes() {
    //   // const updateLikeObj = {
    //   //   post_like: post.post_like + 1,
    //   // }

    //   fetch(`/posts/${id}`,{
    //     method:'PATCH',
    //     headers: {'Content-Type': 'application/json'},
    //     body:JSON.stringify({post_like: post_like +1}),
    //     })
    //     .then(res => res.json())
    //     .then(handleUpdateLike);
    //     // setLikes(post_like)
    //     // .then(() => handleUpdateLike(!renderPosts));
    // }
    
    function onSubmit(e){
      e.preventDefault()
      setInput('')
      const comment = {
          // ...formData,
          post_id: id,
          user_id: formData.user_id,
          post_comment: formData.post_comment
      }

      fetch(`/comments`,{
          method:'POST',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify(comment)
      })
      .then(resp => {
        if(resp.ok){
            resp.json().then(() => {
                setRenderPosts(!renderPosts)
                navigate('/')})
        
        } else{
            resp.json().then(data => {
                console.log(data.errors)
                setErrors(data.errors)
            })
        }
    })
  }

  // const {created_at}.toLocaleString(DateTime.DATE_SHORT)} = createdTime

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
      const commentMap = comments.map((comment) => (
        <div>
          <h4 className="comment">{comment.commenter.username} : {comment.post_comment}</h4>
          <h6 className="time-stamp"> {created_at.toLocaleString(DateTime.DATETIME_MED)} </h6>
        </div> 
))
  
  return (
    <>
      <div className="post">
      {user ? ( <h2 className="post-input"> {user.username} : {content} </h2>)  : null}
      {user ? ( <h6 className="time-stamp"> {created_at.toLocaleString(DateTime.DATETIME_MED)} </h6>)  : null}

      {/* {user ? ( <div> 💖{like.post_like} </div> ) : null} */}
      {user ? ( <button className="like-button" onClick={handleLikes}> 💖 {post_like } </button> ) : null}
      {/* <h3> {user.username} : {content} </h3> */}
      {user ? <div>{commentMap}</div> : null}
      <input className="comment-input" type='text' name='post_comment' value={input} onChange={handleChange} />
      <button id="add-book" className="comment-button" type='submit' value='Add Comment' onClick={onSubmit}>Post</button>


      {/* {user ? (<div><PostComment comments={comments}/></div>) : null} */}

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
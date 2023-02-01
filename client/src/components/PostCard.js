import {useNavigate} from 'react-router-dom'
import React, { useState } from 'react'
import { DateTime } from "luxon";

function PostCard({post, currentUser, deletePost, handleUpdateLike, renderCommentsArray, setCommentsArray, renderPosts, setRenderPosts, renderEditForm, setRenderEditForm, message, renderMessages, setRenderMessages}) {
  const navigate = useNavigate()
  const [commentInput, setCommentInput] = useState('')
  const [isEditing, setEditing] = useState(false);
  const [isReplying, setIsReplying] = useState(false);
  const [input, setInput] = useState('')
  const {id, content, user, comments, post_like, created_at, user_id, updated_at} = post

  const [formData, setFormData] = useState({
    post_comment: "",
    user_id: sessionStorage.getItem('user_id'),
    post_id: id
  })

  const [editPost, setEditPost] = useState({
    content:'',
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
    setCommentInput(e.target.value)
  }

  function handleEditChange(e) {
    setEditPost({content: e.target.value});
  }

  function handleLikes(e){
    e.preventDefault();
    fetch(`/posts/${id}`, {
    method:'PATCH',
    headers: {'Content-Type': 'application/json'},
    body:JSON.stringify({post_like: post_like +1})
    })
    .then(res => res.json())
    .then(() => {
        setRenderPosts(!renderPosts)
    })
  }

  function onEditSubmit(e){
    e.preventDefault();
    fetch(`/posts/${id}`, {
    method:'PATCH',
    headers: {'Content-Type': 'application/json'},
    body:JSON.stringify(editPost)
    })
    .then(res => res.json())
    .then(() => {
      setRenderEditForm(!renderEditForm)
      setEditing(false);
    })
  }

  const [messageData, setMessageData] = useState({
    input: '',
    sender_id: sessionStorage.getItem('user_id'),
    receiver_id: user_id
  });

  function handleMessageChange(e) {
    const { name, value } = e.target
    setMessageData({ ...messageData, [name]: value })
    setInput(e.target.value)
  }

  function onMessageSubmit(e){
    e.preventDefault();
    setInput('')

    const replyMessage = {
      input: messageData.input,
      sender_id: messageData.sender_id,
      receiver_id: messageData.receiver_id
    }

    fetch(`/messages`, {
    method:'POST',
    headers: {'Content-Type': 'application/json'},
    body:JSON.stringify(replyMessage)
    })
    .then(resp => resp.json())
    .then(() => {
      setIsReplying(false);
      setRenderMessages(!renderMessages)
    })
  }

  const editingMessageTemplate = (
    <form className="stack-small" onSubmit={onMessageSubmit}>
      <div className="form-group">
        <input 
          id={id} 
          className="message-edit-input" 
          type="text" 
          value={input}
          name="input"
          onChange={handleMessageChange}/>
      </div>
      <div className="btn-group">
        <button type="submit" 
          onClick={onMessageSubmit}
          className="message-send-button">
            Send
          <span className="visually-hidden"></span>
        </button>
        <button
          type="button"
          className="message-send-button"
          onClick={() => setIsReplying(false)}>
            Cancel
          <span className="visually-hidden"></span>
        </button>
      </div>
    </form>
  );

  const viewMessageTemplate = (
    <button 
      type="button" 
      className="message-button" 
      onClick={() => setIsReplying(true)}>
        ✉️
      <span className="visually-hidden"></span>
    </button>
  )

  function handleDelete(e) {
    e.preventDefault();
    fetch(`/posts/${id}`,{
    method:'DELETE' })
    .then(() => setRenderPosts(!renderPosts))
  }
    
  function onSubmit(e){
    e.preventDefault()
    setCommentInput('')
    const comment = {
        post_id: id,
        user_id: formData.user_id,
        post_comment: formData.post_comment
    }

    fetch(`/comments`,{
        method:'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(comment)
    })
    .then(resp => resp.json())
    .then(() => {
      setRenderPosts(!renderPosts)
      navigate('/')})
  }
  
  const formatted = DateTime
    .fromISO(updated_at)
    .setZone("EST")
    .toLocaleString(DateTime.DATETIME_MED);
    
  // const currentUserId = sessionStorage.getItem('user_id')

  function handleCommentDelete(e, id) {
      e.preventDefault();
      console.log(id)
      fetch(`/comments/${id}`,{
      method:'DELETE' })
      .then(() => setRenderPosts(!renderPosts))
  }

  const commentMap = comments.map(comment => (
    <div>
      <h4 className="comment">{comment.commenter.username} : {comment.post_comment}</h4>
      <h6 className="time-stamp"> 
        {DateTime
          .fromISO(comment.created_at)
          .setZone("EST")
          .toLocaleString(DateTime.DATETIME_MED)}
          {/* <br/> */}
        {currentUser.id === comment.user_id ? 
          <button className="delete-comment-button" 
          onClick={(e) => handleCommentDelete(e, comment.id)}>✖️</button> : null  }
        </h6>
    </div> 
  ))
  
  const editingTemplate = (
    <form className="stack-small" onSubmit={onEditSubmit}>
      <div className="form-group">
        <input 
          id={id} 
          className="edit-input" 
          type="text" 
          name="content"
          value={editPost.content}
          onChange={handleEditChange}/>
      </div>
      <div className="btn-group">
        <button
          type="button"
          className="save-button"
          onClick={() => setEditing(false)}>
            Cancel
          <span className="visually-hidden"></span>
        </button>
        <button 
          type="submit"
          onClick={onEditSubmit}
          className="save-button">
            Save
          <span className="visually-hidden"></span>
        </button>
      </div>
    </form>
  );

  const viewTemplate = (
    <>
    <button 
      type="button" 
      className="edit-button" 
      onClick={() => setEditing(true)}>
        ✏️
      <span className="visually-hidden"></span>
    </button>
    <button
      type="button"
      className="edit-button"
      onClick={handleDelete}>
        ✖️
      <span className="visually-hidden"></span>
    </button>
    </>
    );

  const showEditButton = currentUser.id === user_id ? 
    <div className="post-message"> {isEditing ? editingTemplate : viewTemplate}</div>
    : null

  const showMessageButton = currentUser.id === user_id ?
    null :
    <div className="post-message">{isReplying ? editingMessageTemplate : viewMessageTemplate}</div>

  return (
    <>
    <div className="post">
      {user ? ( <h2 className="post-input"> {user.username} : {content} </h2>)  : null}
      {user ? ( <h6 className="time-stamp"> {formatted} </h6>)  : null}

      {showEditButton}
      {showMessageButton}

      {user ? ( <button className="like-button" onClick={handleLikes}> 💖 {post_like } </button> ) : null}
      
      {user ? <div>{commentMap}</div> : null}
      {/* {showDeleteButton} */}
      <input className="comment-input" type='text' name='post_comment' value={commentInput} onChange={handleChange} />
      <button id="add-book" className="comment-button" type='submit' value='Add Comment' onClick={onSubmit}>Post</button>
    </div>
    </>
  );
}

export default PostCard
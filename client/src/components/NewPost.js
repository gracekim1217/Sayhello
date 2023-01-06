import React, { useState} from 'react'
import { useNavigate } from 'react-router-dom'

function NewPost({currentUser, renderPosts, setRenderPosts}) {
    const navigate = useNavigate();
    const [input, setInput] = useState('')
    const [formData, setFormData] = useState({
        content: '',
        user_id: currentUser.id,
        post_like: 0
    })
    const [errors, setErrors] = useState([])

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData({ ...formData, [name]: value })
        setInput(e.target.value)
    }

    function onSubmit(e){
        e.preventDefault()
        setInput('')
        const post = {
            content: formData.content,
            user_id: formData.user_id,
            post_like: formData.post_like
        }

        fetch('/posts',{
            method:'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(post)
        })
        .then(resp => resp.json())
        .then(() => {
            setRenderPosts(!renderPosts)
            navigate('/')})
    }
        
    return (
        <div id ='book-form' className='content'>
        <div >
            <input className="feed-input" type='text' name='content' value={input} onChange={handleChange} />        
            <button 
            id="add-book"
            className="feed-button"
            type='submit'
            value='Add Post'
            onClick={onSubmit}>Post
            </button>
        </div>
      </div>
    )
}

export default NewPost
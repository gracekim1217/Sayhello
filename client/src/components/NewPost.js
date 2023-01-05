import React, { useState} from 'react'
import { useNavigate } from 'react-router-dom'

function NewPost({addPost, renderPosts, setRenderPosts}) {
    const navigate = useNavigate();
    const [input, setInput] = useState('')
    const [formData, setFormData] = useState({
        content: '',
        // image: '',
        user_id: sessionStorage.getItem('user_id'),
        post_like: 0
      })
    // const [like, setLike] = useState(0)
    const [errors, setErrors] = useState([])


    const {content, image, user_id, post_like} = formData

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData({ ...formData, [name]: value })
        setInput(e.target.value)
    }

    function onSubmit(e){
        e.preventDefault()
        setInput('')
        const post = {
            // ...formData,
            // // like: like
            // post_like : 0
            content: formData.content,
            user_id: formData.user_id,
            post_like: formData.post_like
        }

        fetch('/posts',{
            method:'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(post)
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
        // .then(res => res.json())
        // .then(post => addPost(post))

        // .then(post => addPost({
        //   content,
        //   image,
        //   user_id,
        //   like: [],

        // })
        

        // .then(navigate("/"))
    }
    

    return(
        <div id ='book-form' className='content'>
        <div >
          {/* <label>Title : </label> */}
          <input className="feed-input" type='text' name='content' value={input} onChange={handleChange} />
          
          {/* <label> Image : </label>
          <input type='text' name='image' value={formData.image} onChange={handleChange} /> */}
        
          {/* <label>Year : </label>
          <input type='number' name='year' value={formData.year} onChange={handleChange} />

          <label>Description</label>
          <textarea type='text' rows='4' cols='50' name='description' value={formData.description} onChange={handleChange} /> */}
        
          <button id="add-book" className="feed-button" type='submit' value='Add Post' onClick={onSubmit}>Post</button>
        </div>
      </div>
    )
}

export default NewPost
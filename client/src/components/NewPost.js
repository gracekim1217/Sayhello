import React, { useState} from 'react'
import { useNavigate } from 'react-router-dom'

function NewPost({addPost}) {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        content: '',
        image: '',
        user_id: sessionStorage.getItem('user_id'),
        // post_like: ''
      })

    const {content, image, user_id, post_like} = formData

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData({ ...formData, [name]: value })
    }

    function onSubmit(e){
        e.preventDefault()
        const post = {
            content,
            image,
            user_id,
            // post_like : 0
        }

        fetch('/posts',{
            method:'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(post)
        })
        .then(res => res.json())
        .then(post => addPost(post))
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
        <div onSubmit={onSubmit}>
          {/* <label>Title : </label> */}
          <input type='text' name='content' value={formData.content} onChange={handleChange} />
          
          <label> Image : </label>
          <input type='text' name='image' value={formData.image} onChange={handleChange} />
        
          {/* <label>Year : </label>
          <input type='number' name='year' value={formData.year} onChange={handleChange} />

          <label>Description</label>
          <textarea type='text' rows='4' cols='50' name='description' value={formData.description} onChange={handleChange} /> */}
        
          <input id="add-book" className="button" type='submit' value='Add Post' onClick={onSubmit}/>
        </div>
      </div>
    )
}

export default NewPost
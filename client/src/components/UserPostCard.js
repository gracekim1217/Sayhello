import React, { useState, useEffect} from 'react'
import { useParams, useNavigate } from 'react-router-dom'

function UserPostCard({post, currentUser, updatePost}) {
    const {id, content, image, user, likes, comments } = post
    const [isEditing, setEditing] = useState(false);
    const [newContent, setNewContent] = useState('');
    // console.log(currentUser.posts)
    const navigate = useNavigate()


    const [formData, setFormData] = useState({
        content:'',
        image:'',
    })

    useEffect(() => {
        fetch(`/posts/${id}`)
        .then(res => res.json())
        .then(setFormData)
    },[id])

    const editingTemplate = (
        <form className="stack-small" onSubmit={onSubmit}>
            <div className="form-group">
                <label className="post-label" htmlFor={id}>
                    {content}
                </label>
                <input 
                    id={id} 
                    className="post-text" 
                    type="text" 
                    value={newContent}
                    onChange={handleChange}/>
            </div>
            <div className="btn-group">
                <button
                    type="button"
                    className="btn post-cancel"
                    onClick={() => setEditing(false)}
                    >
                    Cancel
                    <span className="visually-hidden"></span>
                </button>
                <button type="submit" className="btn btn__primary post-edit">
                    Save
                    <span className="visually-hidden"></span>
                </button>
            </div>
        </form>
        );
        const viewTemplate = (
            <div className="stack-small">
                <div className="c-cb">
                    <label className="post-label" htmlFor={id}>
                    {content}
                    </label>
                </div>
                <div className="btn-group">
                    <button 
                        type="button" 
                        className="btn" 
                        onClick={() => setEditing(true)}>
                        Edit <span className="visually-hidden"></span>
                    </button>
                    <button
                        type="button"
                        className="btn btn__danger"
                        onClick={handleDelete}>
                        Delete <span className="visually-hidden"></span>
                    </button>
                </div>
            </div>
        );
        
    // const handleChange = (e) => {
    //     const { name, value } = e.target
    //     setFormData({ ...formData, [name]: value })
    // }

    function handleChange(e) {
        setNewContent(e.target.value);
        }

    function onSubmit(e){
        e.preventDefault();
        fetch(`/posts/${id}`,{
        method:'PATCH',
        headers: {'Content-Type': 'application/json'},
        body:JSON.stringify(formData)
        })
        .then(res => res.json())
        .then(data => {
            updatePost();
            setNewContent("");
            setEditing(false);
        });
            // navigate(`/users/:id`)
    }

    function handleDelete() {
        fetch(`/posts/${id}`,{
          method:'DELETE',
         })
        //  navigate("/users/:id")
         window.location.reload();
    }
    

    
    return (
        <>
        {/* <button onClick={handleBack}>Back</button> */}
        <div>
            <div className="post">{isEditing ? editingTemplate : viewTemplate}</div>
        </div>
        </>
    )
}

export default UserPostCard
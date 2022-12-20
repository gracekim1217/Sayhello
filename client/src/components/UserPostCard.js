import React, { useState, useEffect} from 'react'
import { useParams, useNavigate } from 'react-router-dom'
// import ReactDOM from 'react-dom';
// import EditableLabel from 'react-inline-edit';


function UserPostCard({post, currentUser, updatePost}) {
    const { content, image, user, likes, comments } = post
    // console.log(post.likes)
    const save = (value) => {alert(value)}
    const cancel = () => {alert("Cancelled")}

    const navigate = useNavigate()
    const {id} = useParams()
    const [formData, setFormData] = useState({
        content:'',
        image:'',
    })

    useEffect(() => {
        fetch(`/posts/${id}`)
        .then(res => res.json())
        .then(setFormData)
    },[id])

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData({ ...formData, [name]: value })
    }

    function onSubmit(e){
        // e.preventDefault()
        fetch(`/posts/${id}`,{
        method:'PATCH',
        headers: {'Content-Type': 'application/json'},
        body:JSON.stringify(formData)
        })
        .then(res => {
            res.json().then(updatePost)
            // navigate(`/users/:id`)
        })
    }


    return (
        <>
        <div>
            <p>{content}</p>
            <p>{likes}</p>
            <p>{comments}</p>
        </div>
        </>
    )
}

export default UserPostCard
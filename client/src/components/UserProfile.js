import React, { useState } from 'react'


function UserProfile({currentUser, updateUser, editUser}) {
        // const {username, first_name, last_name} = currentUser
      console.log(currentUser)
    const currentUsername = sessionStorage.getItem('username')
    const currentFirstName = sessionStorage.getItem('first_name')
    const currentLastName = sessionStorage.getItem('last_name')
    const [isEditing, setEditing] = useState(false);
    const [formData, setFormData] = useState({
        first_name:'',
        last_name:''
    })

    function handleChange(e) {
        setFormData({
            first_name: e.target.value,
            last_name: e.target.value
        });
    }

    function onSubmit(e){
        e.preventDefault();
        fetch(`/users/${currentUser.user_id}`,{
        method:'PATCH',
        headers: {'Content-Type': 'application/json'},
        body:JSON.stringify(formData)
        })
        .then(res => res.json())
        .then(data => {
            updateUser(data);
            // setNewContent("");
            setEditing(false);
        });
    }

    const editingTemplate = (
        <form className="stack-small" onSubmit={onSubmit}>
            <div className="form-group">
                <label className="post-label" htmlFor={currentUser.user_id}>
                    {currentFirstName}
                </label>
                <input 
                    // id={id} 
                    className="post-text" 
                    type="text" 
                    value={formData.content}
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
                <button type="submit" onClick={onSubmit} className="btn btn__primary post-edit">
                    Save
                    <span className="visually-hidden"></span>
                </button>
            </div>
        </form>
        );
        const viewTemplate = (
            <div className="stack-small">
                <div className="c-cb">
                    <label className="post-label" htmlFor={currentUser.user_id}>
                    {currentLastName}
                    </label>
                </div>
                <div className="btn-group">
                    <button 
                        type="button" 
                        className="btn" 
                        onClick={() => setEditing(true)}>
                        Edit <span className="visually-hidden"></span>
                    </button>
                    {/* <button
                        type="button"
                        className="btn btn__danger"
                        onClick={handleDelete}>
                        Delete <span className="visually-hidden"></span>
                    </button> */}
                </div>
            </div>
        )

    return(
        <div>
            <h3>Profile</h3>
            <p> Username : {currentUsername}</p>
            <p> First Name : {currentFirstName}</p>
            <p> Last Name : {currentLastName}</p>
            {/* <button>Edit Profile</button> */}
            <div className="post">{isEditing ? editingTemplate : viewTemplate}</div>

        </div>
    )
}

export default UserProfile
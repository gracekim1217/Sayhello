import React, { useState } from 'react'
import { DateTime } from "luxon";

function UserMessageCard({message, renderMessages, setRenderMessages}) {
    const {id, input, sender, sender_id, receiver_id, created_at} = message
    // console.log(message.receiver_id)
    const [formData, setFormData] = useState({
        input: '',
        sender_id: sessionStorage.getItem('user_id'),
        receiver_id: sender_id
    });

    const [errors, setErrors] = useState([])

    function handleChange(e) {
        const { name, value } = e.target
        setFormData({ ...formData, [name]: value })
    }

    function handleDelete(e) {
        fetch(`/messages/${id}`,{
        method:'DELETE'
        })
        .then(() => {
            setRenderMessages(!renderMessages)
        })
    }

    function onSubmit(e){
        e.preventDefault();
        const replyMessage = {
            input: formData.input,
            sender_id: formData.sender_id,
            receiver_id: formData.receiver_id
        }
        fetch(`/messages`,{
        method:'POST',
        headers: {'Content-Type': 'application/json'},
        body:JSON.stringify(replyMessage)
        })
        .then(resp => resp.json())
        .then(() => {
            setRenderMessages(!renderMessages)
            handleDelete();
        })
    }    

    const editingTemplate = (
        <form className="stack-small" onSubmit={onSubmit}>
            <div className="form-group">
                <div>
                    <h3 className="post-input" htmlFor={id}>
                        {sender.username} : {input}
                    </h3>
                    <h6 className="time-stamp">
                        {DateTime
                            .fromISO(created_at)
                            .setZone("EST")
                            .toLocaleString(DateTime.DATETIME_MED)}
                    </h6>
                </div>
                <input 
                    id={id} 
                    className="post-text" 
                    type="text" 
                    value={formData.input}
                    name="input"
                    onChange={handleChange}/>
            </div>
            <div className="btn-group">
                <button type="submit" 
                    // onClick = {() => {
                    //     onSubmit()
                    //     //  handleDelete()
                    //     } }
                    onClick={onSubmit}
                    // onSubmit={handleDelete}
                    className="btn btn__primary post-edit">
                        Send
                    <span className="visually-hidden"></span>
                </button>
                <button
                    type="button"
                    className="btn btn__danger"
                    onClick={handleDelete}>
                        Delete 
                    <span className="visually-hidden"></span>
                </button>
            </div>
        </form>
    );

    return(
        <div>
            <div className="post">{editingTemplate}</div>
        </div>
    )
}

export default UserMessageCard
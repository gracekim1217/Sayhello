import React, { useState } from 'react'


function UserMessageCard({message, addMessage}) {
    const {id, input, sender} = message
    const [isReplying, setIsReplying] = useState(false);
    const [replyMessage, setReplyMessage] = useState({
        input: ''
    });

    function handleChange(e) {
        setReplyMessage({input: e.target.value});
        }

    function onSubmit(e){
        e.preventDefault();
        fetch(`/messages`,{
        method:'POST',
        headers: {'Content-Type': 'application/json'},
        body:JSON.stringify(replyMessage)
        })
        .then(res => res.json())
        .then(data => {
            addMessage();
            setReplyMessage("");
            setIsReplying(false);
        });
            // navigate(`/users/:id`)
    }    

    function handleDelete(e) {
        e.preventDefault();
        fetch(`/messages/${id}`,{
        method:'DELETE',
        })
        //  navigate("/users/:id")
        // window.location.reload();
    }

    const editingTemplate = (
        <form className="stack-small" onSubmit={onSubmit}>
            <div className="form-group">
                <div>
                    <label className="post-label" htmlFor={id}>
                        {sender.username} : {input}
                    </label>
                </div>
                <input 
                    id={id} 
                    className="post-text" 
                    type="text" 
                    value={replyMessage.input}
                    onChange={handleChange}/>
            </div>
            <div className="btn-group">
                <button
                    type="button"
                    className="btn post-cancel"
                    onClick={() => setIsReplying(false)}
                    >
                    Cancel
                    <span className="visually-hidden"></span>
                </button>
                <button type="submit" onClick={onSubmit} className="btn btn__primary post-edit">
                    Send
                    <span className="visually-hidden"></span>
                </button>
            </div>
        </form>
        );
        const viewTemplate = (
            <div className="stack-small">
                <div className="c-cb">
                    <label className="post-label" htmlFor={id}>
                    {sender.username} : {input}
                    </label>
                </div>
                <div className="btn-group">
                    <button 
                        type="button" 
                        className="btn" 
                        onClick={() => setIsReplying(true)}>
                        Reply <span className="visually-hidden"></span>
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

    return(
        <div>
            <div className="post">{isReplying ? editingTemplate : viewTemplate}</div>

            {/* <h3>From : {sender.username}</h3>
            <p>"{input}"</p> */}
        </div>
    )
}

export default UserMessageCard
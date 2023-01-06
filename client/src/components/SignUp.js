import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function SignUp() {
    const navigate = useNavigate()
    const [formData, setFormData] = useState({
        username:'',
        password:'',
        first_name:'',
        last_name:'',
    })
    const {username, password, first_name, last_name} = formData

    function onSubmit(e){
        e.preventDefault()
        const user = {
            username,
            password,
            first_name,
            last_name
        }
   
        fetch(`/users`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(user)
        })
        .then(r => r.json())
        .then(data => {
            navigate("/login")
        })
    }

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData({ ...formData, [name]: value })
    }

    function handleBack() {
        navigate("/login")
    }

    return (
        <> 
        <button onClick={handleBack}>Back</button>

        <div id ="signup-page" className="content"> 
            <label>Username : </label>  
            <input placeholder="Your Username..." type='text' name='username' value={username} onChange={handleChange} />
        
            <label>Password : </label>
            <input placeholder="Your Password..." type='password' name='password' value={password} onChange={handleChange} />

            <label>First Name : </label>  
            <input placeholder="Your Username..." type='text' name='first_name' value={first_name} onChange={handleChange} />

            <label>Last Name : </label>  
            <input placeholder="Your Username..." type='text' name='last_name' value={last_name} onChange={handleChange} />
            
            <input id="signup-form" className="button" type='submit' value="Sign Up" onClick={onSubmit}/>
        </div>
        </>
    )
}

export default SignUp;
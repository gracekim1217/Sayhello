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
        <button className="back-button" onClick={handleBack}>Back</button>

        <form id ="loginForm" className="loginForm"> 
        <div id="login-page" className="content" > 
            <div className="login-input-div">Username :  <input className='login-input' placeholder="Your Username" type='text' name='username' value={username} onChange={handleChange} />
            </div> 

            <div className="login-input-div">Password : <input  className='login-input' placeholder="Your Password" type='password' name='password' value={password} onChange={handleChange} />
            </div>

            <div className="login-input-div">First Name : <input className='login-input' placeholder="Your First Name" type='text' name='first_name' value={first_name} onChange={handleChange} />
            </div>  

            <div className="login-input-div">Last Name :  <input className='login-input' placeholder="Your Last Name" type='text' name='last_name' value={last_name} onChange={handleChange} />
            </div> 

            <input id="loginForm" className="submitButton" type='submit' value="Sign Up" onClick={onSubmit}/>
        </div>
        </form>
        </>
    )
}

export default SignUp;
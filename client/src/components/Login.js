import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'


function Login({setCurrentUser}) {
  // console.log("hello")

  const [formData, setFormData] = useState({
    username:'',
    password:''
  })
  // const [signup, setSignup] = useState(false)
  const {username, password} = formData
  const navigate = useNavigate()


  function onSubmitLogin(e){
    e.preventDefault();
    fetch(`/login`,{
      method:'POST',
      headers:{'Content-Type': 'application/json'},
      body:JSON.stringify({username, password})
    })
    .then(res => res.json())
    .then(data => {
      // console.log(setCurrentUser);
      sessionStorage.setItem('user_id', data.id);
      sessionStorage.setItem('username', data.username);
      sessionStorage.setItem('first_name', data.first_name);
      sessionStorage.setItem('last_name', data.last_name);
      sessionStorage.setItem('photo', data.photo);
      setCurrentUser(data);
      // sessionStorage.setItem('post', data.posts.content);
    })
    navigate(`/`)
  }

  function onSubmitSignIn(){
        navigate("/signup")
      }
  
  const handleChange = (e) => {
      const { name, value } = e.target
      setFormData({ ...formData, [name]: value })
  }

  return (
    <> 
    <form onSubmit={onSubmitLogin}>
      <div id="login-page" className="content" > 

        <label>Username : </label>
        <input placeholder="Your Username..." type='text' name='username' value={formData.username} onChange={handleChange} />
      
        <label>Password : </label>
        <input placeholder="Your Password..." type='password' name='password' value={formData.password} onChange={handleChange} />
      
        <input id="login-form" className="button" type='submit' value='Log In' />
        <input id="signup-form" className="button" type='submit' value="Sign Up" 
          onClick={onSubmitSignIn} />
      </div>
    </form>
    </>
    )
  }

export default Login


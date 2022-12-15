import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'


function Login() {
  const [formData, setFormData] = useState({
    username:'',
    password:''
  })
  const [signup, setSignup] = useState(false)
  const {username, password} = formData
  const navigate = useNavigate()

  function onSubmitLogin(){
      const user = {
          username,
          password
      }

      let url = `http://localhost:3000/login`
      if(signup) url = 'http://localhost:3000/signup'
      fetch(`http://localhost:3000/login`,{
        method:'POST',
        headers:{'Content-Type': 'application/json'},
        body:JSON.stringify(user)
      })
      .then(res => res.json())
      .then(user => sessionStorage.setItem('user_id', user.id))

      navigate(`/`)
  }

  function onSubmitSignIn(){
        navigate("/signup")
      }

      // e.preventDefault()
      // const user = {
      //     username,
      //     password
      // }
    
      // fetch(`/users`, {
      //   method: 'POST',
      //   headers: {'Content-Type': 'application/json'},
      //   body: JSON.stringify(user)
      // })
      // .then(data => window.sessionStorage.setItem("user_id", data.id))
      // .then(() => navigate("/"))

      // .then(res => {
      //     if(res.ok) {
      //         res.json().then(user => {
      //         })
      //     } else {
      //         res.json().then(json => setErrors(Object.entries(json.errors)))
      //     }
      // })
  

  const handleChange = (e) => {
      const { name, value } = e.target
      setFormData({ ...formData, [name]: value })
  }

  return (
    <> 
    <div id="login-page" className="content" > 

    <label>Username : </label>
    <input placeholder="Your Username..." type='text' name='username' value={username} onChange={handleChange} />
  
    <label>Password : </label>
    <input placeholder="Your Password..." type='password' name='password' value={password} onChange={handleChange} />
   
    <input id="login-form" className="button" type='submit' value='Log In' onClick={()=> {
        onSubmitLogin();
        setSignup(true);
    }}/>
    <input id="signup-form" className="button" type='submit' value="Sign Up" onClick={onSubmitSignIn}/>

    {/* {errors? <div>{errors}</div>:null} */}
    </div>
    </>
    )
  }

export default Login


import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'


function Login({setCurrentUser}) {
  // console.log("hello")

  const [formData, setFormData] = useState({
    username:'',
    password:''
  })
  // const [signup, setSignup] = useState(false)
  // const {username, password} = formData
  const navigate = useNavigate()
  const [error, setErrors] = useState([])


  function onSubmitLogin(e){
    e.preventDefault();
    const login = {
      ...formData 
  }

    fetch(`/login`,{
      method:'POST',
      headers:{'Content-Type': 'application/json'},
      body:JSON.stringify(login)
    })
    .then(resp => {
      if(resp.ok){
          resp.json().then(user => {
              sessionStorage.setItem("user_id", user.id)
                    sessionStorage.setItem('username', user.username);
      sessionStorage.setItem('first_name', user.first_name);
      sessionStorage.setItem('last_name', user.last_name);
              // setToggleLogin(true)
      setCurrentUser(user);

              setErrors([])
              navigate("/")

          })
      } else{
          resp.json().then(data => {
              setErrors(data.error.login)
          })
        }})
    // .then(res => res.json())
    // .then(data => {
    //   // console.log(setCurrentUser);
    //   sessionStorage.setItem('user_id', data.id);
    //   sessionStorage.setItem('username', data.username);
    //   sessionStorage.setItem('first_name', data.first_name);
    //   sessionStorage.setItem('last_name', data.last_name);
    //   sessionStorage.setItem('photo', data.photo);
    //   setCurrentUser(data);
    //   // sessionStorage.setItem('post', data.posts.content);
    // })
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

  // const [formData, setFormData] = useState('')
  //   const [errors, setErrors] = useState([])
  //   const navigate = useNavigate()

  //   useEffect(() => {
  //       const currentUser = sessionStorage.getItem("user_id")
  //       if (currentUser) {
  //           navigate("/")
  //       }
  //   }, [])
    
  //   const { username, password} = formData 

  //   function handleLogin(user) {
  //       sessionStorage.setItem("user_id", user.id)
  //   }

  //   function onSubmit(e) {
  //       e.preventDefault()
  //       const user = {
  //           username, 
  //           password
  //       }
  //       fetch(`/login`, {
  //           method: 'POST',
  //           headers: {'Content-Type': 'application/json'},
  //           body: JSON.stringify(user)
  //       })
  //       .then(res => {
  //           if(res.ok){
  //               res.json().then(currentUser => handleLogin(currentUser)).then(() => {navigate("/")})
  //           }else {
  //               res.json().then(json => setErrors(json.errors))
  //           }
  //       })
  //   }

  //   function handleChange(e) {
  //       const { name, value } = e.target 
  //       setFormData({...formData, [name]: value})
  //   }

  //     function onSubmitSignIn(){
  //       navigate("/signup")
  //     }

    
  //   return (
  //       <div >
  //           <form onSubmit={onSubmit}>
  //               <label>Username:</label>
  //               <input type='username' name='username' value={username} onChange={handleChange}></input>
  //               <label>Password:</label>
  //               <input type='password' name='password' value={password} onChange={handleChange} ></input>
  //               <button >Log In!</button>
                
  //           </form>
  //           <input id="signup-form" className="button" type='submit' value="Sign Up" 
  //         onClick={onSubmitSignIn} />
  //           {errors? <div>{errors}</div>:null}
  //       </div>
  //   )

  }

export default Login


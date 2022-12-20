import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function SignUp() {
  const [formData, setFormData] = useState({
    username:'',
    password:'',
    first_name:'',
    last_name:'',
})
// const [errors, setErrors] = useState([])
const {username, password, first_name, last_name} = formData
const navigate = useNavigate()

function onSubmit(e){
    e.preventDefault()
    // navigate("/")
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
    .then(r => {
        if (r.ok) {
            r.json()
            .then(data => {
                // window.sessionStorage.setItem("user_id", data.id))
            // .then(() => 
            navigate("/")})
        }
        else {
            console.log("invalid")

        }
    })
    // .then(res => {
    //     if(res.ok) {
    //         res.json().then(user => {
    //             navigate(`/login`)
    //         })
    //     } else {
    //         res.json().then(json => setErrors(Object.entries(json.errors)))
    //     }
    // })
}

const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
}

return (
    <> 
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
        {/* {errors?errors.map(e => <div>{e[0]+': ' + e[1]}</div>):null} */}
        </div>
    </>

)


    // const [username, setUsername] = useState("");
    // const [password, setPassword] = useState("");
    // const [first_name, setFirstName] = useState("");
    // const [last_name, setLastName] = useState("");

    // // const [passwordConfirmation, setPasswordConfirmation] = useState("");
    // const navigate = useNavigate()

    // const currentUser = sessionStorage.getItem("user_id")

    // useEffect(() => {
    //   if (currentUser) {
    //    navigate("/")
    //   } 
    // },[currentUser, navigate])

    // function handleSubmit(e) {
    //   e.preventDefault();
    //   fetch("/signup", {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify({
    //       username,
    //       password,
    //       first_name,
    //       last_name
    //     //   password_confirmation: passwordConfirmation,
    //     }),
    //   })
    //   .then(r => {
    //     if (r.ok) {
    //         r.json()
    //         .then(data => window.sessionStorage.setItem("user_id", data.id))
    //         .then(() => navigate("/"))
    //     }
    //     else {
    //         console.log("invalid")

    //     }
    // })
    //     // .then((r) => r.json())
    //     // .then(onLogin);
    // }
  
    // return (
    //   <form >
    //     <label htmlFor="username">Username:</label>
    //     <input
    //       type="text"
    //       id="username"
    //       value={username}
    //       onChange={(e) => setUsername(e.target.value)}
    //     />
    //     <label htmlFor="password">Password:</label>
    //     <input
    //       type="password"
    //       id="password"
    //       value={password}
    //       onChange={(e) => setPassword(e.target.value)}
    //     />
    //     <label htmlFor="first_name">First Name:</label>
    //     <input
    //       type="text"
    //       id="first_name"
    //       value={first_name}
    //       onChange={(e) => setFirstName(e.target.value)}
    //     />
    //     <label htmlFor="last_name">Last Name:</label>
    //     <input
    //       type="text"
    //       id="last_name"
    //       value={last_name}
    //       onChange={(e) => setLastName(e.target.value)}
    //     />
    //     {/* <label htmlFor="password_confirmation">Confirm Password:</label>
    //     <input
    //       type="password"
    //       id="password_confirmation"
    //       value={passwordConfirmation}
    //       onChange={(e) => setPasswordConfirmation(e.target.value)}
    //     /> */}
    //     <button type="submit" onClick={handleSubmit}>Submit</button>
    //   </form>
    // );
  }

export default SignUp;
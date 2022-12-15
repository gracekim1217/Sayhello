import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'


function Login() {
  const [formData, setFormData] = useState({
    username:'',
    password:''
})
const [signup, setSignup] = useState(false)
const [errors, setErrors] = useState([])
const {username, password} = formData
const navigate = useNavigate()

function onSubmitLogin(e){
    const user = {
        username,
        password
    }

    let url = `/login`
    if(signup) url = '/users'
    fetch(url,{
      method:'POST',
      headers:{'Content-Type': 'application/json'},
      body:JSON.stringify(user)
    })
    .then(res => res.json())
    .then(user => sessionStorage.setItem('user_id', user.id))

    navigate(`/`)
}

function onSubmitSignin(e){
    e.preventDefault()
    const user = {
        username,
        password
    }
   
    fetch(`/users`, {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(user)
    })
    .then(res => {
        if(res.ok) {
            res.json().then(user => {
            })
        } else {
            res.json().then(json => setErrors(Object.entries(json.errors)))
        }
    })
}

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
    <input id="signup-form" className="button" type='submit' value="Sign Up" onClick={onSubmitSignin}/>

    {errors? <div>{errors}</div>:null}
    </div>
    </>
)
}

export default Login




//     const [username, setUsername] = useState("");
//     const [password, setPassword] = useState("");

//     const currentUser = sessionStorage.getItem("user_id")
//     const navigate = useNavigate();

//     useEffect(() => {
//         if (currentUser) {
//          navigate("/home")
//         } 
//       },[currentUser, navigate])
  
//       function handleSignup() {
//         navigate("/signup")
//       }
  
//     function handleSubmit(e) {
//       e.preventDefault();
//       fetch("/login", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({ username, password }),
//       })
//         .then(data => window.sessionStorage.setItem("user_id", data.id))
//         .then(() => navigate("/piano"))
//         // .then((r) => r.json())
//         // .then((user) => onLogin(user));
//     }
  
//     return (
//         <>
//         <form >
//             <input
//             type="text"
//             value={username}
//             onChange={(e) => setUsername(e.target.value)}
//             />
//             <input
//             type="text"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             />
//             <button type="submit" onClick={handleSubmit}>Login</button>
//         </form>
//         <div className ="ui message">
//             New to us? <button onClick={handleSignup}>Sign Up</button>
//         </div>
//         </>
//     );
//   }


// const navigate = useNavigate()

// const [email, setEmail] = useState("")
// const [password, setPassword] = useState("")
// const [errors, setErrors] = useState("")

// const currentUser = sessionStorage.getItem("user_id")

// useEffect(() => {
//   if (currentUser) {
//    navigate("/piano")
//   } 
// },[currentUser, navigate])

// function handleSignup() {
//   navigate("/signup")
// }

// function handleLogIn(e) {
//     e.preventDefault()
//     fetch('/login',{
//         method: "POST",
//         headers: {
//             "Content-Type": "application/json"
//         },
//         body: JSON.stringify({ email, password })
//     })
//     .then(r => {
//         if (r.ok) {
//             r.json()
//             .then(data => window.sessionStorage.setItem("user_id", data.id))
//             .then(() => navigate("/piano"))
//         }
//         else {
//             setErrors("Invalid username or password")
//         }
//     })
// }

// return (
// <div className ="ui middle aligned center aligned grid">
// <div className ="column">
// <h2 className ="ui teal image header">
//   <div className ="content">
//     Log In
//   </div>
// </h2>
// <form className ="ui large form">
//   <div className ="ui stacked segment">
//     <div className ="field">
//       <div className ="ui left icon input">
//         <i className ="envelope icon"></i>
//         <input onChange={(e) => setEmail(e.target.value)} type="text" name="email" placeholder="E-mail address"/>
//       </div>
//     </div>
//     <div className ="field">
//       <div className ="ui left icon input">
//         <i className ="lock icon"></i>
//         <input onChange={(e) => setPassword(e.target.value)} type="password" name="password" placeholder="Password"/>
//       </div>
//     </div>
//     <button 
//     onClick={handleLogIn}
//     className ="ui fluid large teal submit button">Login</button>
//   </div>
//   <div className ="ui error message"></div>
// </form>
// <div className ="ui message">
//   <button onClick={handleSignup}>Sign Up</button>
// </div>
//   <h3 className="error">{errors}</h3>
// </div>
// </div>
// )
// }

// export default Login;
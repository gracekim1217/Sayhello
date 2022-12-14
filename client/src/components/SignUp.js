import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function SignUp() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    // const [passwordConfirmation, setPasswordConfirmation] = useState("");
    const navigate = useNavigate()

    const currentUser = sessionStorage.getItem("user_id")

    useEffect(() => {
      if (currentUser) {
       navigate("/")
      } 
    },[currentUser, navigate])

    function handleSubmit(e) {
      e.preventDefault();
      fetch("/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username,
          password,
        //   password_confirmation: passwordConfirmation,
        }),
      })
      .then(r => {
        if (r.ok) {
            r.json()
            .then(data => window.sessionStorage.setItem("user_id", data.id))
            .then(() => navigate("/piano"))
        }
        else {
            console.log("invalid")

        }
    })
        // .then((r) => r.json())
        // .then(onLogin);
    }
  
    return (
      <form >
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {/* <label htmlFor="password_confirmation">Confirm Password:</label>
        <input
          type="password"
          id="password_confirmation"
          value={passwordConfirmation}
          onChange={(e) => setPasswordConfirmation(e.target.value)}
        /> */}
        <button type="submit" onClick={handleSubmit}>Submit</button>
      </form>
    );
  }

export default SignUp;
import { Routes, Route } from "react-router-dom";
import {useEffect, useState} from 'react';
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import Feed from "./components/Feed";
import UserPost from "./components/UserPost";

function App() {
  const [posts, setPosts] = useState([])
  const [users, setUsers] = useState([])
  const [currentUser, setCurrentUser] = useState({})

  const currentUserId = sessionStorage.getItem('user_id')
  const currentUsername = sessionStorage.getItem('username')
  // const currentFirstName = sessionStorage.getItem('first_name')
  // const currentLastName = sessionStorage.getItem('last_name')
  // const currentPhoto = sessionStorage.getItem('photo')
  console.log("hello")



    useEffect(() => {
        fetch(`/posts`)
        .then(res => res.json())
        .then(posts => setPosts(posts))
    },[])
    // console.log(posts)

    // useEffect(() => {
    //   fetch('/users')
    //   .then(res => res.json())
    //   .then(data => setUsers(data))
    // },[])

    const updatePost = (updatedPost) => setPosts(current => {
      return current.map(post => {
       if(post.id === updatedPost.id){
         return updatedPost
       } else {
         return post
       }
      })
    })
    
    const addPost = (post) => setPosts(current => [...current, post])
    // const deletePost = (id) => setPosts(current => current.filter(b => p.id !== id)) 
  
  
  return (
    <>
      <Navbar />
      {!sessionStorage.getItem('user_id') ? <Login/> :
        <div className="App">
          <Routes>
            <Route exact path='/' element={<Feed posts={posts} users={users} currentUser={currentUser} addPost={addPost} />} />
            <Route path="signup" element={<SignUp />} />
            <Route path="/login" element={<Login setCurrentUser={setCurrentUser}/>} />
            <Route path="/users/:id" element={<UserPost currentUser={currentUser} updatePost={updatePost} />} />
          </Routes>
        </div>
      }
    </>
  );
}

export default App;
import { Routes, Route } from "react-router-dom";
import {useEffect, useState} from 'react';
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import Feed from "./components/Feed";
import UserPost from "./components/UserPost";
import UserMessage from "./components/UserMessage";
import UserProfile from "./components/UserProfile";

function App() {
  const [posts, setPosts] = useState([])
  // const [postArray, setPostArray] = useState([])
  const [messages, setMessages] = useState([])
  const [editUser, setEditUser] = useState("")
  const [renderPosts, setRenderPosts] = useState(false)
  const [renderEditForm, setRenderEditForm] = useState(false)
  const [renderMessages, setRenderMessages] = useState(false)


  const [currentUser, setCurrentUser] = useState({
    user_id: sessionStorage.getItem('user_id'),
    username:  sessionStorage.getItem('username'),
    first_name: sessionStorage.getItem('first_name'),
    last_name: sessionStorage.getItem('last_name'),
    photo: sessionStorage.getItem('photo')
  })

  // const currentUserId = sessionStorage.getItem('user_id')
  // const currentUsername = sessionStorage.getItem('username')
  // const currentFirstName = sessionStorage.getItem('first_name')
  // const currentLastName = sessionStorage.getItem('last_name')
  // const currentPhoto = sessionStorage.getItem('photo')
  // const currentPost = sessionStorage.getItem('post')
  // console.log(currentUser)



    useEffect(() => {
        fetch(`/posts`)
        .then(res => res.json())
        .then(posts => {setPosts(posts)})
    },[renderPosts, renderEditForm])
    
    useEffect(() => {
      fetch('/messages')
      .then(res => res.json())
      .then(messages => setMessages(messages))
    },[renderMessages])
    // console.log(messages)
    
    const updateUser = (updatedUser) => setEditUser(currentUser => {
      return currentUser.map(user => {
       if(user.user_id === updatedUser.id){
         return updatedUser
       } else {
         return user
       }
      })
    })

    // function handleUpdateLike(updatedLike){
    //   const updateLike = posts.map((post) => 
    //   post.id === updatedLike.id ? updatedLike : post);
    //   setPosts(updateLike);
    // }

    function updatePost(id, newPost) {
      const updatedPost = posts.map((post) => {
        if (id === post.id) {
          //
          return {...post, content: newPost}
        }
        return post;
      });
      setPosts(updatedPost);
    }

    // function updateUser(id, newUser) {
    //   const updatedUser = users.map((user) => {
    //     if (id === post.id) {
    //       //
    //       return {...post, content: newUser}
    //     }
    //     return user;
    //   });
    //   setPosts(updatedUser);
    // }
    
    const addPost = (post) => setPosts(current => [...current, post])
    const addMessage = (message) => setMessages(current => [...current, message])
    const deletePost = (id) => setPosts(current => current.filter(p => p.id !== id)) 
  
  
  return (
    <>
      <Navbar />
      {!sessionStorage.getItem('user_id') ? <Login/> :
        <div className="App">
          <Routes>
            <Route exact path='/' element={<Feed posts={posts} renderPosts={renderPosts} setRenderPosts={setRenderPosts} currentUser={currentUser} addPost={addPost} />} />
            <Route path="signup" element={<SignUp />} />
            <Route path="/login" element={<Login setCurrentUser={setCurrentUser}/>} />
            <Route path="/users/:id/posts" element={<UserPost renderPosts={renderPosts} setRenderPosts={setRenderPosts} renderEditForm={renderEditForm} setRenderEditForm={setRenderEditForm} currentUser={currentUser} posts={posts} updatePost={updatePost} deletePost={deletePost}/>} />
            <Route path="/users/:id/messages" element={<UserMessage renderMessages={renderMessages} setRenderMessages={setRenderMessages} currentUser={currentUser} messages={messages} addMessage={addMessage}/>} />
            <Route path="/users/:id/profile" element={<UserProfile currentUser={currentUser} updateUser={updateUser} editUser={editUser}/>} />
          </Routes>
        </div>
      }
    </>
  );
}

export default App;
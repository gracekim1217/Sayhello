import PostContainer from "./PostContainer"
import NewPost from "./NewPost"
import DisplayProfile from "./DisplayProfile"
import { useNavigate } from "react-router-dom";


function Feed({currentUser, posts, addPost, deletePost, handleUpdateLike, renderPosts, setRenderPosts, renderEditForm, setRenderEditForm, messages, renderMessages, setRenderMessages}){
    // console.log(posts)
    const navigate = useNavigate()

    function handleLogout() {
        sessionStorage.clear()
        navigate("/login")
    }

    return(
        <>
            <button className="logout-button" onClick={handleLogout}>Logout</button>
            <div className="feed-profile">
                <h2 className="h2">Profile</h2>
                <DisplayProfile currentUser={currentUser}/>
                {/* {users.map(user => <DisplayProfile key={user.id} user={user} currentUserId={currentUserId}  />)} */}
            </div>
            <div className="feed-page">
                <h1 className="h2">Feed</h1>
                <NewPost addPost={addPost} renderPosts={renderPosts} setRenderPosts={setRenderPosts}/>
                <PostContainer posts={posts} renderPosts={renderPosts} setRenderPosts={setRenderPosts} deletePost={deletePost} handleUpdateLike={handleUpdateLike} renderMessages={renderMessages} setRenderMessages={setRenderMessages} currentUser={currentUser} messages={messages} renderEditForm={renderEditForm} setRenderEditForm={setRenderEditForm}/>
            </div>
        </>
    )
}

export default Feed
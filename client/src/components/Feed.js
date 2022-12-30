import PostContainer from "./PostContainer"
import NewPost from "./NewPost"
import DisplayProfile from "./DisplayProfile"
import { useNavigate } from "react-router-dom";


function Feed({currentUser, posts, addPost, deletePost, handleUpdateLike, renderPosts, setRenderPosts}){
    // console.log(posts)
    const navigate = useNavigate()

    function handleLogout() {
        sessionStorage.clear()
        navigate("/login")
    }

    return(
        <>
            <button onClick={handleLogout}>Logout</button>

            <div>
                <h1>Profile</h1>
                <DisplayProfile currentUser={currentUser}/>
                {/* {users.map(user => <DisplayProfile key={user.id} user={user} currentUserId={currentUserId}  />)} */}
            </div>
            <div className="content">
                <h1 id="project-title">Feed</h1>
                <NewPost addPost={addPost} renderPosts={renderPosts} setRenderPosts={setRenderPosts}/>
                <PostContainer posts={posts} currentUser={currentUser} deletePost={deletePost} handleUpdateLike={handleUpdateLike}/>
            </div>
        </>
    )
}

export default Feed
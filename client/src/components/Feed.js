import PostContainer from "./PostContainer"
import NewPost from "./NewPost"
import DisplayProfile from "./DisplayProfile"
import { useNavigate } from "react-router-dom";


function Feed({currentUser, users, posts, addPost, updatePost, deletePost}){
    console.log(posts)
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
                <DisplayProfile users={users} currentUser={currentUser}/>
                {/* {users.map(user => <DisplayProfile key={user.id} user={user} currentUserId={currentUserId}  />)} */}
            </div>
            <div className="content">
                <h1 id="project-title">Feed</h1>
                <NewPost addPost={addPost} />
                <PostContainer posts={posts} currentUser={currentUser} updatePost={updatePost} deletePost={deletePost}/>
            </div>
        </>
    )
}

export default Feed
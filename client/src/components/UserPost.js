import UserPostCard from './UserPostCard'
import { useNavigate } from 'react-router-dom'

function UserPost({currentUser, updatePost, renderPosts, setRenderPosts, posts, deletePost, renderEditForm, setRenderEditForm}) {
    // console.log(posts)
    const navigate = useNavigate()

    function handleBack() {
        navigate("/")
    }

    return (
        <>
        <button className="back-button" onClick={handleBack}>🔙 Back</button>
        <div>
            <div>{posts && posts.filter(post => post.user_id === currentUser.id)
                .map(post => 
                <UserPostCard key={post.id} name={post.name} post={post} renderPosts={renderPosts} setRenderPosts={setRenderPosts} currentUser={currentUser} renderEditForm={renderEditForm} setRenderEditForm={setRenderEditForm} updatePost={updatePost} deletePost={deletePost}/>)}
            </div>  
        </div>
        </>
    )
}

export default UserPost
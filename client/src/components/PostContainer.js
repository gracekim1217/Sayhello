import PostCard from './PostCard'

function PostContainer({currentUser, posts, renderPosts, setRenderPosts, handleUpdateLike, deletePost}) {
    // console.log(renderPosts)

    return (
     <div className="content">
         <div className="grid-container">
            {posts?.map(post => <PostCard key={post.id} post={post} renderPosts={renderPosts} setRenderPosts={setRenderPosts} currentUser={currentUser} handleUpdateLike={handleUpdateLike} deletePost={deletePost} />)}
            {/* {currentUser.posts.map(post => <PostCard key={post.id} post={post} currentUser={currentUser} updatePost={updatePost} />)} */}
         </div>
     </div>
    );
  }
  
export default PostContainer

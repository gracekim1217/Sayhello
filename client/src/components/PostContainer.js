import PostCard from './PostCard'

function PostContainer({currentUser, posts, handleUpdateLike, deletePost}) {
    // console.log(posts)

    return (
     <div className="content">
         <div className="grid-container">
            {posts?.map(post => <PostCard key={post.id} post={post} currentUser={currentUser} handleUpdateLike={handleUpdateLike} deletePost={deletePost} />)}
            {/* {currentUser.posts.map(post => <PostCard key={post.id} post={post} currentUser={currentUser} updatePost={updatePost} />)} */}
         </div>
     </div>
    );
  }
  
export default PostContainer

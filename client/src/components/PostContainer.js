import PostCard from './PostCard'

function PostContainer({currentUser, posts, updatePost}) {
    console.log(posts)

    return (
     <div className="content">
         <div className="grid-container">
            {posts.map(post => <PostCard key={post.id} post={post} currentUser={currentUser} updatePost={updatePost} />)}
            {/* {currentUser.posts.map(post => <PostCard key={post.id} post={post} currentUser={currentUser} updatePost={updatePost} />)} */}
         </div>
     </div>
    );
  }
  
export default PostContainer

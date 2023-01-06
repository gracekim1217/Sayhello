import PostCard from './PostCard'
import UserMessageCard from "./UserMessageCard"

function PostContainer({currentUser, posts, renderPosts, setRenderPosts, handleUpdateLike, deletePost, renderEditForm, setRenderEditForm, messages, renderMessages, setRenderMessages}) {
    // console.log(renderPosts)

  return (
    <div className="content">
      <div className="grid-container">
        {posts?.map(post => <PostCard key={post.id} post={post} renderPosts={renderPosts} setRenderPosts={setRenderPosts} currentUser={currentUser} handleUpdateLike={handleUpdateLike} deletePost={deletePost} renderEditForm={renderEditForm} setRenderEditForm={setRenderEditForm} renderMessages={renderMessages} setRenderMessages={setRenderMessages} messages={messages}/>)}
      </div>
      <div>{messages && messages.filter(message => message.receiver_id === currentUser.id)
        .map(message => <UserMessageCard key={message.id} message={message} renderMessages={renderMessages} setRenderMessages={setRenderMessages} currentUser={currentUser} />)}</div>
    </div>
  );
}
  
export default PostContainer
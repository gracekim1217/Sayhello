function PostComment({comments}) {
    const {user, post_comment} = comments
          // const commentMap = comments.map((comment) => (
      //   <div> {comment.user.username} : {comment.post_comment} </div>
      // ))

    return(
        <div>
            {user.username} : {post_comment}
        </div>
    )
}

export default PostComment
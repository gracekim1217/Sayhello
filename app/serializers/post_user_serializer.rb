class PostUserSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :content, :image, :post_like, :created_at, :comments, :updated_at

  belongs_to :user
  has_one :like
  # has_many :comments, serializer: CommentUserSerializer
  # has_many :commenters

  def comments
    object.comments.collect do |comment| 
      {id: comment.id, post_id: comment.post_id, created_at: comment.created_at, post_comment: comment.post_comment, user_id: comment.user_id, commenter: comment.commenter}
    end
  end
end

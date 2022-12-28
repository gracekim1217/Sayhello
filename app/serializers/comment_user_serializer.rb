class CommentUserSerializer < ActiveModel::Serializer
  attributes :id, :post_id, :post_comment, :user_id

  has_one :user
end

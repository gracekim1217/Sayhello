class CommentSerializer < ActiveModel::Serializer
  attributes :id, :post_id, :post_comment, :user_id, :created_at

  # has_one :user

  # has_one :commenter
end

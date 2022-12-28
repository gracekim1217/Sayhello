class CommentSerializer < ActiveModel::Serializer
  attributes :id, :post_id, :post_comment, :user_id
end

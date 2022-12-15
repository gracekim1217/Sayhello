class LikeSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :post_id, :post_like
end

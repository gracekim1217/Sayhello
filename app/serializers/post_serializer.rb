class PostSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :content, :image, :post_like
end

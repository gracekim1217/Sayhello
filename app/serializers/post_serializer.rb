class PostSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :content, :image, :post_like, :created_at, :updated_at

  # has_one :user
  # has_many :comments
  # has_one :commenter, through: :comments
end

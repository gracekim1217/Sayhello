class PostLikeSerializer < ActiveModel::Serializer
  attributes :id, :content, :image

  belongs_to :user
  has_many :likes
  has_many :comments
end

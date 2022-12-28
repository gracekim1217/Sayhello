class PostUserSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :content, :image, :post_like

  belongs_to :user
  has_one :like
  has_many :comments
end

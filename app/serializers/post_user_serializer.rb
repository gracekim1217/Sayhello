class PostUserSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :content, :image

  belongs_to :user
end

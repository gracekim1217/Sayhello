class UserPostSerializer < ActiveModel::Serializer
  attributes :id, :username, :password, :first_name, :last_name, :photo

  has_many :posts
  has_many :receivers
  has_many :senders
  # has_many :commented_posts
end

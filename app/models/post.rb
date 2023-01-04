class Post < ApplicationRecord
    belongs_to :user
    has_one :like
    has_many :comments

    # def liked?(user)
    #     !!self.likes.find(|like| like.user_id == user.id)
    # end

    # has_many :likers, :through => :likes, source: :user
    # has_many :commenters, :through => :comments, source: :user

    # Will return an array of follows for the given user instance
    has_many :posted_comments, foreign_key: :post_id, class_name: "Comment"
    # Will return an array of users who follow the user instance
    has_many :commenters, through: :posted_comments, :source => :commenter
end

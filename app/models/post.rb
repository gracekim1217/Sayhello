class Post < ApplicationRecord
    belongs_to :user
    has_one :like
    has_many :comments

    # def liked?(user)
    #     !!self.likes.find(|like| like.user_id == user.id)
    # end

    # has_many :likers, :through => :likes, source: :user
    # has_many :commenters, :through => :comments, source: :user
end

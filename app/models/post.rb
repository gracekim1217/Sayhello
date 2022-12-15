class Post < ApplicationRecord
    has_many :likes
    has_many :comments

    # belongs_to :user, through: :likes
    # belongs_to :user, through: :comments

    has_many :likers, :through => :likes, source: :user
    has_many :commenters, :through => :comments, source: :user
end

class Post < ApplicationRecord
    has_many :likes
    has_many :comments
    # belongs_to :user, through: :likes
    # belongs_to :user, through: :comments
end

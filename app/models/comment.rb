class Comment < ApplicationRecord
    belongs_to :post
    # belongs_to :user
    belongs_to :commenter, foreign_key: :user_id, class_name: "User"

    validates :post_comment, presence: true
end

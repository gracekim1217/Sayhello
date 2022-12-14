class Message < ApplicationRecord
    # The user receiving the message
    belongs_to :receiver, foreign_key: :receiver_id, class_name: "User"
    
    # The user sending the message
    belongs_to :sender, foreign_key: :sender_id, class_name: "User"

end

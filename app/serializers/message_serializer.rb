class MessageSerializer < ActiveModel::Serializer
  attributes :id, :input, :sender_id, :receiver_id
  
  belongs_to :sender
  belongs_to :receiver
end

class MessageSerializer < ActiveModel::Serializer
  attributes :id, :input
  
  belongs_to :sender
  belongs_to :receiver
end

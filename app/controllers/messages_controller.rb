class MessagesController < ApplicationController
    def index
        render json: Message.all.order('created_at ASC'), status: :ok
    end

    def show
        message = find_message
        render json: message.order('created_at ASC'), status: :ok
    end

    # def update
    #     message = find_message
    #     message.update!(message_params)
    #     render json: message, status: :accepted
    # end

    def create
        # binding.pry
        message = Message.create!(message_params)
        user = User.find(session[:user_id])
        user.save
        render json: message, status: :created
    end

    def destroy
        message = find_message
        message.destroy
        head :no_content
    end

    private

    def find_message
        Message.find(params[:id])
    end

    def message_params
        params.permit(:input, :sender_id, :receiver_id)
    end
end

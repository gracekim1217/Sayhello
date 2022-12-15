class SessionsController < ApplicationController
    def create
      user = User.find_by(username: params[:username])
      if user&.authenticate(params[:password])
        session[:user_id] = user.id
        # byebug
        render json: user, status: :ok
      else
          render json: {errors: "Invalid Password or User"}
      end
      # session[:user_id] = user.id
      # render json: user
    end

    def destroy
        session.delete :user_id
        head :no_content
    end
  end
class UsersController < ApplicationController
  def index
    render json: User.all, each_serializer: UserPostSerializer, status: :ok
  end

  def show
    user = find_user
    render json: user, serializer: UserPostSerializer, status: :ok
  end

  def update
    user = find_user
    user.update!(user_params)
    render json: user, status: :accepted
  end

  def create
    user = User.create!(user_params)
    session[:user_id] = user.id
    render json: user, status: :created
  end

  private

  def find_user
    User.find(params[:id])
  end

  def user_params
    params.permit(:username, :password, :first_name, :last_name, :photo)
  end 
end

class PostsController < ApplicationController
    def index
        render json: Post.all, each_serializer: PostUserSerializer, status: :ok
    end

    def show
        post = find_post
        render json: post, status: :ok
    end

    def update
        post = find_post
        post.update!(post_params)
        render json: post, status: :accepted
    end

    def create
        user_post = Post.create!(post_params)
        user = User.find(session[:user_id])
        user.save
        # @post.user_id = current_user.id
        render json: user_post, status: :created
    end

    def like
        @post = Post.all.find(params[:id])
        Like.create(user_id: current_user.id, post_id: @post.id)
        redirect_to post_path(@post)
    end

    def destroy
        post = find_post
        post.destroy
        head :no_content
    end

    private

    def find_post
        Post.find(params[:id])
    end

    def post_params
        params.permit(:content, :image, :user_id)
    end
end


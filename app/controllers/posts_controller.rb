class PostsController < ApplicationController
    def index
        render json: Post.all, each_serializer: PostUserSerializer, status: :ok
    end

    def show
        post = find_post
        render json: post, serializer: PostLikeSerializer, status: :ok
    end

    def update
        post = find_post
        post.update!(post_params)
        render json: post, status: :accepted
    end

    def create
        post = Post.create!(post_params)
        render json: post, status: :created
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
        params.permit(:content, :image)
    end
end


class LikesController < ApplicationController
    def index
        render json: Like.all, status: :ok
    end

    def show
        like = find_like
        render json: like, status: :ok
    end

    def update
        like = find_like
        like.update!(like_params)
        render json: like, status: :accepted
    end

    # def create
    #     like = Like.create!(like_params)
    #     render json: like, status: :created
    # end

    private

    def find_like
        Like.find(params[:id])
    end

    def like_params
        params.permit(:content, :image)
    end
end

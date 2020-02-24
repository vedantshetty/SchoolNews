class CategoriesController < ApplicationController
# before_action :find_post, only: [:show, :edit, :update, :destroy]
before_action :authenticate_user!
  def index
    @categories = Category.all.order('created_at')
    @posts = Post.all.order('created_at DESC')
    render 'show'
  end

  def show
    @categories = Category.all.order('created_at')
    @posts = Post.where("category_id":params[:id]).order('created_at DESC')
  end
end

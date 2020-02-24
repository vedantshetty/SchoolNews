class PostsController < ApplicationController
before_action :find_post, only: [:show, :edit, :update, :destroy]
before_action :authenticate_user!
  def index
    @categories = Category.all.order('created_at')
    @posts = Post.where("created_at>=?",30.days.ago).order('created_at DESC')
  end

  def new
    @post = Post.new
  end

  def show
  end

  def create
    @post = current_user.posts.new(whitelisted_post_params)
    if @post.save
      redirect_to @post
    else
      render 'new'
    end
  end

  def edit
  end

  def update
    if @post.update(whitelisted_post_params.merge(user_id: current_user.id))
      redirect_to @post
    else
      render 'edit'
    end
  end

  def destroy 
    @post.destroy
    redirect_to posts_path
  end

  private 

  def whitelisted_post_params
    params.require(:post).permit(:title,:content,:category_id)
  end

  def find_post
    @post = Post.find(params[:id])
  end
end

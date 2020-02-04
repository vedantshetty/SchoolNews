class PostsController < ApplicationController
before_action :find_post, only: [:show, :edit, :update, :destroy]
before_action :authenticate_user!
  def index
    @posts = Post.where("created_at>=?",30.days.ago).order('created_at DESC')
    render :layout => false
  end

  def new
    @post = Post.new
  end

  def show
  end

  def create
    @post = Post.new(whitelisted_post_params)

    if @post.save
      redirect_to @post
    else
      render 'new'
    end
  end

  def edit
  end

  def update
    if @post.update(whitelisted_post_params)
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
    params.require(:post).permit(:title,:content)
  end

  def find_post
    @post = Post.find(params[:id])
  end
end

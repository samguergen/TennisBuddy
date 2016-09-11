class CommentsController < ApplicationController
  unlocked_params = ActiveSupport::HashWithIndifferentAccess.new(params)

  def index
    @comments = Comment.all
  end

  def show
  end

  def new
    @comment = Comment.new
  end

  def edit
  end

  def create

    @comment = Comment.new(unlocked_params)
    if @comment.save!
      flash[:notice] = "Comment saved"
    else
      flash[:notice] = "A problem has occurred. Your comment couldn't be posted."
    end
    redirect_to games_path
    
  end

  def destroy
    @game = Game.find(params[:game_id])
    @comment = @game.comments.find(params[:id])
    @comment.destroy
    redirect_to game_path(@game)
  end



end

end

class CommentsController < ApplicationController

   http_basic_authenticate_with :name => "dhh", :password => "secret", :only => :destroy

  def create
    @game = Game.find(params[:game_id])
    @comment = @game.comments.create(params[:comment])
    redirect_to game_path(@game)
  end

  def destroy
    @game = Game.find(params[:game_id])
    @comment = @game.comments.find(params[:id])
    @comment.destroy
    redirect_to game_path(@game)
  end

end

class CommentsController < ApplicationController

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
    puts 'params are '
    puts params
    puts 'commenter is '
    puts params[:comment]
    puts params[:comment][:body]
    @game = Game.find(params[:game_id])
    @comment = Comment.new({commenter: params[:comment][:commenter], body: params[:comment][:body], game_id: @game.id})
    if @comment.save!
      puts "comment is "
      puts @comment.body
      puts @comment.commenter
      flash[:notice] = "Comment saved"
    else
      flash[:notice] = "A problem has occurred. Your comment couldn't be posted."
    end
    return redirect_to games_path
  end

  def destroy
    @game = Game.find(params[:game_id])
    @comment = @game.comments.find(params[:id])
    @comment.destroy
    redirect_to game_path(@game)
  end



end

  private

    def comment_params
      params.require(:comment).permit(:commenter, :body)
    end

end

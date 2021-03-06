class GamesController < ApplicationController
  skip_before_action :verify_authenticity_token
  before_action :set_game, only: [:show, :edit, :update, :destroy]

  # GET /games
  # GET /games.json
  def index
    @games = Game.all
    # if session[:current_user_id]
    #   @logged_user = User.find(session[:current_user_id])
    # end
  end

  # GET /games/1
  # GET /games/1.json
  def show
    @game = Game.find(params[:id])
    puts 'now the game is'
    puts @game
    puts 'coords are '
    puts @game.coordinates
    @coords = @game.coordinates.split(',')
    puts 'each coord is '
    puts @coords[0]
    puts @coords[1]

    if @game.user_id != nil
      @user_game = User.find(@game.user_id)
      puts 'the user obj in relation is '
      puts @user_game
    else
      puts "No user_id found"
    end
  end

  # GET /games/new
  def new
    @game = Game.new
  end

  # GET /games/1/edit
  def edit
  end

  # POST /games
  # POST /games.json
  def create
    @game = Game.create(game_params)
    puts 'game params are'
    puts game_params
    puts 'full game obj is'
    puts @game

    respond_to do |format|
      if @game.save
        puts 'game has been saved to db, about to redirect to game show'
        format.html { redirect_to games_path, notice: 'Game was successfully created.' }
        format.json { render :show, status: :created, location: @game }
      else
        # format.js
        format.html { render :new }
        format.json { render json: @game.errors, status: :unprocessable_entity }
      end
      # redirect_to games_path
    end
  end

  # PATCH/PUT /games/1
  # PATCH/PUT /games/1.json
  def update
    respond_to do |format|
      if @game.update(game_params)
        format.html { redirect_to @game, notice: 'Game was successfully updated.' }
        format.json { render :show, status: :ok, location: @game }
      else
        format.html { render :edit }
        format.json { render json: @game.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /games/1
  # DELETE /games/1.json
  def destroy
    @game.destroy
    respond_to do |format|
      format.html { redirect_to games_url, notice: 'Game was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  def addscore
    puts 'inside addscore, score params is '
    puts params[:score]
    puts 'original url is'
    url_id = request.referrer.split('/')[-1]
    puts url_id
    current_game = Game.find(url_id)
    puts 'current game is '
    puts current_game
    new_score = params[:score]
    current_game.update_attributes(:score => new_score)
    render nothing: true
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_game
      @game = Game.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def game_params
      params.require(:game).permit(:title, :description, :score, :coordinates)
    end

    def score_params
      params.require(:game).permit(:score)
    end
end

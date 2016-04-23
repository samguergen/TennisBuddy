class UsersController < ApplicationController
  protect_from_forgery

  def index
  end

  def show
  end

  def create
    @user = User.new(user_params)
    if @user.save
      # session[:user_id] = @user.id
      redirect_to '/'
    else
      redirect_to '/signup'
    end
  end

  def edit
  end

  def destroy
  end

  private

  def user_params
    params.require(:user).permit(:password, :first_name, :last_name, :age)
  end

end
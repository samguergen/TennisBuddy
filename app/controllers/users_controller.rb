class UsersController < ApplicationController


  def create
    @user = User.new(user_params)
    if @user.save
      session[:user_id] = @user.id
      redirect_to '/'
    else
      redirect to '/'
    end
  end

  def show
    @user = User.find_by(id: session[:user_id])
  end

  private

  def user_params
    params.require(:user).permit(:email, :age, :password, :password_confirmation)
  end

end

class UsersController < ApplicationController
  protect_from_forgery

  def index
  end

  def show
  end

  def create
    new_user = User.new(user_params)
    if new_user.save!
      session[:user_id] = new_user.id
      flash[:status] = "Thank you for registering!"
      redirect_to '/'
    else
      flash[:status] = "There was a problem registering your account. Please sign up again or contact Customer Support"
      redirect_to '/signup'
    end
  end

  def edit
  end

  def destroy
  end

  private

  def user_params
    params.require(:user).permit(:first_name, :last_name, :username, :email, :password, :password_confirmation, :age, :zipcode)
  end

end
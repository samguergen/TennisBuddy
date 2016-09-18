class SessionsController < ApplicationController
  protect_from_forgery

  def login
    @user = User.find_by_email(params[:email])
    puts 'user is '
    puts @user
    if @user && @user.authenticate(params[:password])
      puts 'matrix'
      session[:user_id] = @user.id
      puts "successfully logged in"
      redirect_to '/'
    else
      flash[:alert] = "You did not log in"
      puts "Not logged in"
      redirect_to '/'
    end
  end


  def logout
    session[:user_id] = nil
    redirect_to root_path
  end
end

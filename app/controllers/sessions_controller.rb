class SessionsController < ApplicationController
  protect_from_forgery

  def login
    @user = User.find_by_email(params[:user][:email])
    puts 'user is '
    puts @user
    if @user && @user.authenticate(params[:user][:password])
      puts 'logged in'
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

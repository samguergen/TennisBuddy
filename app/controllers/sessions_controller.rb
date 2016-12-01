class SessionsController < ApplicationController
  protect_from_forgery

  def login
    @user = User.find_by_email(params[:email])
    if @user && @user.authenticate(params[:password])
      session[:current_user_id] = @user.id
      puts "successfully logged in"
      redirect_to root_path({usr: @user})
    else
      flash[:alert] = "You did not log in"
      redirect_to '/'
    end
  end


  def logout
    puts @user
    puts 'about to log out'
    puts session.id
    # session[:current_user_id] = nil
    session = nil
    puts "current session is "
    redirect_to root_path
  end
end

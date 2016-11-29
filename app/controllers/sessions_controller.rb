class SessionsController < ApplicationController
  protect_from_forgery

  def login
    @user = User.find_by_email(params[:email])
    puts 'user is '
    puts @user
    if @user && @user.authenticate(params[:password])
      puts 'matrix'
      session[:current_user_id] = @user.id
      puts "successfully logged in"
      puts session[:current_user_id]
      redirect_to root_path
      # redirect_to root_path({sess: session[:user_id], user: @user})
    else
      flash[:alert] = "You did not log in"
      puts "Not logged in"
      redirect_to '/'
    end
  end


  def logout
    session[:current_user_id] = nil
    redirect_to root_path
  end
end

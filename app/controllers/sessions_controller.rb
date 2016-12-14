class SessionsController < ApplicationController
  protect_from_forgery

  def login
    @user = User.find_by_email(params[:email])
    if @user && @user.authenticate(params[:password])
      session[:current_user_id] = @user.id
      puts "successfully logged in"
      puts session[:current_user_id]
      redirect_to root_path({usr: @user, sesh: session[:current_user_id]})
    else
      flash[:alert] = "You did not log in"
      redirect_to '/'
    end
  end


  def logout
    puts 'about to log out'
    session.delete(session.id)
    redirect_to root_path
  end
end

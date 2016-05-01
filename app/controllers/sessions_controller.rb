class SessionsController < ApplicationController
  def new
  end

  def login
    current_user = User.find_by(email => params[:email], password => params[:password])
    if current_user
      session[user_id] = current_user.id
      puts 'LOGGED IN!'
      redirect_to '/'
    else
      flash[:alert] = "There was a problem with your username and password."
      puts "Problem"
      redirect_to '/login'
    end

  end

  def logout
  end


end

class SessionsController < ApplicationController
  def new
  end

  # def login
  #   current_user = User.find_by(email => params[:email], password => params[:password])
  #   if current_user
  #     session[user_id] = current_user.id
  #     puts 'LOGGED IN!'
  #     redirect_to '/'
  #   else
  #     flash[:alert] = "There was a problem with your username and password."
  #     puts "Problem"
  #     redirect_to '/login'
  #   end

  # end


  def login
        user = User.find_by_email(params[:email])
    # If the user exists AND the password entered is correct.
    if user && user.authenticate(params[:password])
      # Save the user id inside the browser cookie. This is how we keep the user
      # logged in when they navigate around our website.
      session[:user_id] = user.id
      redirect_to '/'
    else
    # If user's login doesn't work, send them back to the login form.
      redirect_to '/login'
    end
  end

  def logout
  end


end

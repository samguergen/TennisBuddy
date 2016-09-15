class SessionsController < ApplicationController
  protect_from_forgery

  def login
    @user = User.find_by({email: params[:email]})
    if @user.try(:authenticate, params[:password])
      session[:user_id] = @user.id
      alert("you logged in succesfully")
      redirect_to welcome_index_path(@user)
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

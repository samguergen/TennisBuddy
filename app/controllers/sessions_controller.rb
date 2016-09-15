class SessionsController < ApplicationController

  def login
    @user = User.find_by({email: params[:email]})
    if @user.try(:authenticate, params[:password])
      session[:user_id] = @user.id
      redirect_to "/"
    else
      redirect_to '/'
    end
  end


  def logout
    session[:user_id] = nil
    redirect_to root_path
  end
end

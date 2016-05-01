class SessionsController < ApplicationController
  def new
  end

  def logged
    @u = User.find(session[:user_id])
    puts 'user in logged '
    puts u
    redirect_to '/browse'
  end

  def login
    @user = User.find_by_email(params[:email])
    if @user && @user.authenticate(params[:password])
      session[:user_id] = @user.id
    else
      redirect_to '/login'
    end
  end

  def logout
  end


end

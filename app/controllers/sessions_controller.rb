class SessionsController < ApplicationController

  def new
    redirect_to '/new-game'
  end

  def logged
    @u = User.find(session[:user_id])
    puts 'inside logged func'
    puts u
    redirect_to '/browse'
  end

  def login
    @user = User.find_by_email(params[:email])
    if @user && @user.authenticate(params[:password])
      session[:user_id] = @user.id
      puts 'inside login func'
      # redirect_to '/new-game', :locals => {:resource => 'Some text'}
    else
      redirect_to '/login'
    end
  end

  def logout
  end

end

class SessionsController < ApplicationController
  def new
  end

  def create
    @session = User.find_by(:email => user[email], :password => user[password])
    if @session
      flash[:notice] = "You are now logged in"
    else
      flash[:warning] = "You did not use the correct email/password combination"
  end

end

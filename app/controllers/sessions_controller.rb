class SessionsController < Devise::SessionsController
   skip_before_filter :verify_authenticity_token, :only => :create

  def create
    new_user = User.new(:first_name => user[first_name],
                  :last_name => user[last_name],
                  :username => user[username],
                  :email => user[email],
                  :password => user[password],
                  :age => user[age],
                  :zipcode => user[zipcode],
                  :photo_url => user[photo_url])
    if new_user.save!
      puts 'SAVED BABY'
      session[:user_id] = new_user.id
      flash[:status] = "THank you for registering!"
      redirect "/"
    else
      puts 'UNSAVED BABY'
      flash[:status] = "There was a problem registering your account. Please sign up again or contact Customer Support"
      redirect "/signup"
    end
  end

#   # def create
#   #   @user = User.from_omniauth(env["omniauth.auth"])
#   #   if @user
#   #     session[:user_id] = @user.id
#   #     redirect_to "/user_preferences"
#   #   else
#   #     redirect_to '/login'
#   #   end
#   # end

#   def destroy
#     session[:user_id] = nil
#     redirect_to root_path
#   end

#   # private

#   # def user_params
#   #   params.require(:user).permit(:password, :first_name, :last_name, :age)
#   # end

end

class SessionsController < Devise::SessionsController
   skip_before_filter :verify_authenticity_token, :only => :create


#   # def create
#   #   @user = User.from_omniauth(env["omniauth.auth"])
#   #   if @user
#   #     session[:user_id] = @user.id
#   #     redirect_to "/user_preferences"
#   #   else
#   #     redirect_to '/login'
#   #   end
#   # end


end

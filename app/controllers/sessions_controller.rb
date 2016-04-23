class SessionsController < Devise::SessionsController
   skip_before_filter :verify_authenticity_token, :only => :create

  # def create
  #   @user = User.from_omniauth(env["omniauth.auth"])
  #   if @user
  #     session[:user_id] = @user.id
  #     redirect_to "/user_preferences"
  #   else
  #     redirect_to '/login'
  #   end
  # end

  def create
    @user = User.new(user_params)
    if @user.save
      redirect_to '/'
    else
      redirect_to '/signup'
    end
  end

  def destroy
    session[:user_id] = nil
    redirect_to root_path
  end

  private

  def user_params
    params.require(:user).permit(:password, :first_name, :last_name, :age)
  end

end

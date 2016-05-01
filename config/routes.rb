Rails.application.routes.draw do

  get 'sessions/new'

  get 'sessions/new'

  root 'application#index'
  get '*path' => 'application#index'

  resources :users, :games, :comments

  get '/sessions' => 'sessions#logged',  via: :get, as: :logged_path
  post '/sessions' => 'sessions#login', via: :post, as: :login_path
  delete '/sessions' => 'sessions#logout', via: :delete, as: :logout_path

end

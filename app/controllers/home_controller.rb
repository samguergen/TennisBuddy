class HomeController < ApplicationController
  def index
  	@users = User.all
  	puts 'session id is'
  	puts session.id
  	#@user = User.find()
  end
end

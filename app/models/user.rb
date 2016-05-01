class User < ActiveRecord::Base
  has_secure_password
  # attr_accessible :email, :password, :password_confirmation
  # has_secure_password
  # validates_presence_of :password, :on => :create
  has_many :games
  has_many :comments
end

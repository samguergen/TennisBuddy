class User < ActiveRecord::Base
  has_secure_password
  belongs_to :game
  has_many :games
  has_many :comments

end


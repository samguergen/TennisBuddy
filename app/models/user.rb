class User < ActiveRecord::Base
   validates :password, confirmation: true
end

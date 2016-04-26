class CreateUsers < ActiveRecord::Migration
  def change
    create_table :users do |t|

      t.string :first_name
      t.string :last_name
      t.string :age
      t.string :email
      t.string :password
      t.string :password_confirmation
      t.string :zipcode
      t.string :photo_url

      t.timestamps null: false
    end
  end
end

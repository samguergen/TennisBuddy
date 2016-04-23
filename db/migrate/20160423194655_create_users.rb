class CreateUsers < ActiveRecord::Migration
  def change
    create_table :users do |t|
      t.string :firstName
      t.string :lastName
      t.string :email
      t.string :username
      t.string :password
      t.boolean :deactivated
      t.string :currentLocation
      t.integer :zipcode


      t.timestamps null: false
    end
  end
end

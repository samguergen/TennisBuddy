class CreateUsers < ActiveRecord::Migration
  def change
    create_table :users do |t|
      t.string :first_name, null:false
      t.string :last_name, null:false
      t.integer :age
      t.string :photo_url
      t.string :email, null:false
      t.string :password_digest, null:false
      t.boolean :deactivated
      t.integer :zipcode
      t.references :games
      t.references :comments

      t.timestamps null: false
    end
  end
end




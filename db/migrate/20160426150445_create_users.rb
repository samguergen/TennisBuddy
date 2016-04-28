class CreateUsers < ActiveRecord::Migration
  def change
    create_table :users do |t|

      t.string :first_name, null:false
      t.string :last_name, null:false
      t.string :username, null:false
      t.string :email, null:false
      t.string :password_digest, null:false
      t.string :age, null:false
      t.boolean :deactivated, default:false
      t.integer :zipcode, null:false
      t.string :photo_url
      t.references :games
      t.references :comments

      t.timestamps null: false
    end
  end
end

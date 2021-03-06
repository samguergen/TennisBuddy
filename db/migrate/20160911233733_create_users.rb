class CreateUsers < ActiveRecord::Migration
  def change
    create_table :users do |t|

      t.string :email
      t.string :password_digest
      t.string :first_name
      t.string :last_name
      t.integer :age
      t.string :gender
      t.string :description
      t.string :photo
      t.references :game

      t.timestamps null: false
    end
  end
end

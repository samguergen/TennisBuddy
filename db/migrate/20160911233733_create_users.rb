class CreateUsers < ActiveRecord::Migration
  def change
    create_table :users do |t|

      t.string :firstname
      t.string :lastname
      t.integer :age
      t.string :description
      t.string :uid
      t.references :game

      t.timestamps null: false
    end
  end
end

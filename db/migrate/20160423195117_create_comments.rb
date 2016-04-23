class CreateComments < ActiveRecord::Migration
  def change
    create_table :comments do |t|
      t.text :description, null: false
      t.belongs_to :games
      t.belongs_to :user

      t.timestamps null: false
    end
  end
end

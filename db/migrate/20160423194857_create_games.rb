class CreateGames < ActiveRecord::Migration
  def change
    create_table :games do |t|
      t.string :title, null: false
      t.string :description
      t.string :player_1
      t.string :player_2
      t.string :winner
      t.string :location
      t.references :comments
      t.belongs_to :user

      t.timestamps null: false
    end
  end
end

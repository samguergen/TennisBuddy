class CreateGames < ActiveRecord::Migration
  def change
    create_table :games do |t|
      t.string :title
      t.text :description
      t.string :score

      t.timestamps null: false
    end
  end
end

class CreateMeals < ActiveRecord::Migration[6.1]
  def change
    create_table :meals do |t|
      t.string :name
      t.text :description
      t.float :unit_price
      t.text :ingredients
      t.text :allergens
      t.string :range_date_time
      t.integer :available_quantity
      t.references :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end

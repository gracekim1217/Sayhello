class CreateLikes < ActiveRecord::Migration[6.1]
  def change
    create_table :likes do |t|
      t.integer :user_id
      t.integer :post_id
      # t.integer :post_like, default: 0

      t.timestamps
    end
  end
end

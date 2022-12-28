class CreatePosts < ActiveRecord::Migration[6.1]
  def change
    create_table :posts do |t|
      t.integer :user_id
      t.string :content
      t.string :image
      t.integer :post_like

      t.timestamps
    end
  end
end

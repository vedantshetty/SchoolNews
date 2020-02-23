class AddForeignKeysToPosts < ActiveRecord::Migration[6.0]
  def change
    change_table :posts do |t|
      t.remove :user_id, :category_id
      t.belongs_to :user
      t.belongs_to :category
    end
  end
end
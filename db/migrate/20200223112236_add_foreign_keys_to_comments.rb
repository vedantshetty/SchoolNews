class AddForeignKeysToComments < ActiveRecord::Migration[6.0]
  def change
    change_table :comments do |t|
      t.remove :post_id, :name
      t.belongs_to :post
      t.belongs_to :user
    end
  end
end

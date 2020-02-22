class Post < ApplicationRecord
  has_many :comments
  belongs_to :user
  belongs_to :category
  has_rich_text :content
end

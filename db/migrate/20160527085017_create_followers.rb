class CreateFollowers < ActiveRecord::Migration
  def change
    create_table :followers do |t|
      t.integer :user_id
      t.string :followed_by
      t.string :integer

      t.timestamps null: false
    end
  end
end

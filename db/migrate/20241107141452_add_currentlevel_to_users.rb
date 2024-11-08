class AddCurrentlevelToUsers < ActiveRecord::Migration[7.1]
  def change
    add_column :users, :currentlevel, :integer
  end
end

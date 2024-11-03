class CreateStudents < ActiveRecord::Migration[7.1]
  def change
    create_table :students do |t|
      t.string :email
      t.boolean :active
      t.string :startingdate
      t.string :favoritegenre
      t.string :interests
      t.integer :currentlevel
      t.integer :currentlesson

      t.timestamps
    end
  end
end

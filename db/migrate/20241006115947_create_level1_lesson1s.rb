class CreateLevel1Lesson1s < ActiveRecord::Migration[7.1]
  def change
    create_table :level1_lesson1s do |t|
      t.string :email
      t.integer :currenttopic
      t.boolean :lessoncomplete
      t.string :topic1
      t.string :topic2
      t.string :topic3
      t.string :topic4
      t.string :topic5
      t.string :topic6
      t.string :topic7
      t.string :topic8
      t.string :topic9
      t.string :topic10
      t.string :topic11
      t.string :finaltest

      t.timestamps
    end
  end
end

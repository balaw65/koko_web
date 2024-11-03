class CreateL1L3Questions < ActiveRecord::Migration[7.1]
  def change
    create_table :l1_l3_questions do |t|
      t.string :email
      t.string :majorkeys
      t.string :minorkeys
      t.string :major_chord_i
      t.string :major_chord_iv
      t.string :major_chord_v
      t.string :transpose
      t.string :key_of_c
      t.string :key_of_g
      t.string :key_of_d

      t.timestamps
    end
  end
end

class CreateL1L2Questions < ActiveRecord::Migration[7.1]
  def change
    create_table :l1_l2_questions do |t|
      t.string :email
      t.string :el_string
      t.string :a_string
      t.string :d_string
      t.string :g_string
      t.string :b_string
      t.string :eh_string

      t.timestamps
    end
  end
end

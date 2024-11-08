class AddSoundHoleToL1L1Questions < ActiveRecord::Migration[7.1]
  def change
    add_column :l1_l1_questions, :sound_hole, :string
  end
end

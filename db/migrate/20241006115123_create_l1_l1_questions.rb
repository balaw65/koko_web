class CreateL1L1Questions < ActiveRecord::Migration[7.1]
  def change
    create_table :l1_l1_questions do |t|
      t.string :email
      t.string :sound_board
      t.string :bridge
      t.string :saddle
      t.string :tuning_pegs
      t.string :frets
      t.string :fret_board
      t.string :nut
      t.string :pick_guard
      t.string :finger_1
      t.string :finger_2
      t.string :finger_3
      t.string :finger_4
      t.string :finger_t
      t.string :finger_m
      t.string :finger_a
      t.string :finger_i
      t.string :finger_c
      t.string :finger_p

      t.timestamps
    end
  end
end

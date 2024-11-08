# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema[7.1].define(version: 2024_11_07_141452) do
  create_table "l1_l1_questions", force: :cascade do |t|
    t.string "email"
    t.string "sound_board"
    t.string "bridge"
    t.string "saddle"
    t.string "tuning_pegs"
    t.string "frets"
    t.string "fret_board"
    t.string "nut"
    t.string "pick_guard"
    t.string "finger_1"
    t.string "finger_2"
    t.string "finger_3"
    t.string "finger_4"
    t.string "finger_t"
    t.string "finger_m"
    t.string "finger_a"
    t.string "finger_i"
    t.string "finger_c"
    t.string "finger_p"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "sound_hole"
  end

  create_table "l1_l2_questions", force: :cascade do |t|
    t.string "email"
    t.string "el_string"
    t.string "a_string"
    t.string "d_string"
    t.string "g_string"
    t.string "b_string"
    t.string "eh_string"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "l1_l3_questions", force: :cascade do |t|
    t.string "email"
    t.string "majorkeys"
    t.string "minorkeys"
    t.string "major_chord_i"
    t.string "major_chord_iv"
    t.string "major_chord_v"
    t.string "transpose"
    t.string "key_of_c"
    t.string "key_of_g"
    t.string "key_of_d"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "level1_lesson1s", force: :cascade do |t|
    t.string "email"
    t.integer "currenttopic"
    t.boolean "lessoncomplete"
    t.string "topic1"
    t.string "topic2"
    t.string "topic3"
    t.string "topic4"
    t.string "topic5"
    t.string "topic6"
    t.string "topic7"
    t.string "topic8"
    t.string "topic9"
    t.string "topic10"
    t.string "topic11"
    t.string "finaltest"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "schedulars", force: :cascade do |t|
    t.string "timezone"
    t.string "lessontime"
    t.string "lessonday"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "schedulers", force: :cascade do |t|
    t.string "timezone"
    t.string "lessontime"
    t.string "lessonday"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "students", force: :cascade do |t|
    t.string "email"
    t.boolean "active"
    t.string "startingdate"
    t.string "favoritegenre"
    t.string "interests"
    t.integer "currentlevel"
    t.integer "currentlesson"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "users", force: :cascade do |t|
    t.string "name"
    t.string "email"
    t.string "timezone"
    t.string "lessontime"
    t.string "lessonday"
    t.string "usertype"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "password_digest"
    t.boolean "admin"
    t.string "remember_digest"
    t.string "activation_digest"
    t.boolean "activated"
    t.datetime "activated_at"
    t.integer "currentlevel"
  end

end

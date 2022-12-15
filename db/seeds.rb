# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

User.destroy_all
10.times do
    User.create(username: Faker::Name.first_name, password: '1234', first_name: Faker::Name.first_name, last_name: Faker::Name.last_name, photo: rand(1..10))
end

Message.destroy_all
20.times do
    Message.create(sender_id: User.all.ids.sample, receiver_id: User.all.ids.sample, input: Faker::Quote.famous_last_words)
end

Post.destroy_all
15.times do
    Post.create(content: Faker::Quote.famous_last_words, image: rand(1..15))
end

Like.destroy_all
30.times do
    Like.create(user_id: User.all.ids.sample, post_id: Post.all.ids.sample, post_like: rand(1..100))
end

Comment.destroy_all
30.times do
    Comment.create(user_id: User.all.ids.sample, post_id: Post.all.ids.sample, post_comment: Faker::Quote.famous_last_words)
end

puts "Seeding done!"
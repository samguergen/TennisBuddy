# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

first_user = {
  first_name: "Elsa",
  last_name: "Banana",
  age: 25,
  gender: "female",
  description: "A very cool girl who loves tennis",
  email: "banana@gmail.com",
  password: "123123",
  password_confirmation: "123123"
}

first_creation = User.create(first_user)

first_game = Game.create({
  title: "Morning Game in Manhattan",
  description: "Anyone is up for an early morning game in Central Park?",
  score: "no scores yet",
  creator_id: first_user
})

first_comment = Comment.create({
  commenter: "Julie",
  body: "This looks like a great game",
  game_id: first_game
  })


# second_user = User.create({
#   first_name: "Leila",
#   last_name: "Malawi",
#   age: 29,
#   gender: "female",
#   description: "Awesome human. I am just a great person. Hit me up if you ever want to play",
#   email: "leila@gmail.com",
#   password: "234234",
#   password_confirmation: "234234"
# })

# second_game = Game.create({
#   title: "Afternoon game anyone?",
#   description: "Looking to play for at least 2 hours. Females only pls.",
#   score: "no scores yet",
#   user_id: second_user.id
# })

# second_comment = Comment.create({
#   commenter: "Emma",
#   body: "I wish I had arms so I could play with you..",
#   game_id: second_game.id
#   })


# third_user = User.create({
#   first_name: "Yulia",
#   last_name: "Eskanov",
#   age: 19,
#   gender: "female",
#   description: "Me looking for player of tennis, please email me for play",
#   email: "yulia@vkontakt.ru",
#   password: "234234",
#   password_confirmation: "234234"
# })

# third_game = Game.create({
#   title: "Me would like play",
#   description: "I want to play in rich suburb of NY. Please be fre to play tennis with me in rich suburb.",
#   score: "no scores yet",
#   user_id: third_user.id
# })

# third_comment = Comment.create({
#   commenter: "Olga",
#   body: "I want to play with you, comrade.",
#   game_id: third_game.id
#   })
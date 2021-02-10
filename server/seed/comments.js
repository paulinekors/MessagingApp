const Comment = require("../models/comment");
const faker = require("faker");

let comments = [];

for (let i = 1000; i <= 1600; i++) {
  comments.push(new Comment({
    messageId: i,
    body: faker.lorem.paragraph(),
    email: faker.internet.email(),
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName()
  }));
}

module.exports = comments;

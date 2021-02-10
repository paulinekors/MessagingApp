const Message = require("../models/message");
const faker = require("faker");
const messages = [];

faker.locale = "nl";

for (let i = 1; i <= 600; i++) {
  const message = new Message({
    avatar: faker.internet.avatar(),
    body: faker.lorem.paragraph(),
    email: faker.internet.email(),
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    category: "Off-topic",
    title: faker.lorem.sentence(),
  });

  if (message.isValid) {
    message.assignId();
    messages.push(message);
  } else {
    throw new Error("Invalid!");
  }
}

module.exports = messages;


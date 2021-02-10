const bodyParser = require("body-parser");
const cors = require("cors");
const express = require("express");
const Message = require("./models/message");
const Comment = require("./models/comment");
const comments = require("./seed/comments");
const messages = require("./seed/messages");
const app = express();
const { PORT = 3000 } = process.env;

const getListMessage = message => ({
  id: message.id,
  title: message.title,
  body: message.body,
  category: message.category,
  firstName: message.firstName,
  createdAt: message.createdAt,
  updatedAt: message.updatedAt
});

app.use(cors());
app.use(bodyParser.json());

app.get("/messages", (req, res) => {
  const offset = parseInt(req.query.offset || 0);
  const limit = parseInt(req.query.limit || 5);
  const payload = messages.slice(offset, limit + offset).map(getListMessage);

  res.send(payload);
});

app.get("/messages/:id", (req, res) => {
  const payload = messages.find(
    message => message.id === parseInt(req.params.id)
  );

  if (payload) {
    res.send(payload);
  } else {
    res.sendStatus(404);
  }
});

app.patch("/messages/:id", (req, res) => {
  const message = messages.find(
    message => message.id === parseInt(req.params.id)
  );

  if (!message) return res.sendStatus(404);

  message.update(req.body);
  res.send(message);
});

app.delete("/messages/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const index = messages.findIndex(m => m.id === id);
  const isPresent = index > -1;

  if (!isPresent) return res.sendStatus(404);

  messages.splice(index, 1);
  res.sendStatus(204);
});

app.post("/messages", (req, res) => {
  const message = new Message(req.body);

  if (message.isValid) {
    message.assignId();
    messages.push(message);

    res.status(200).send(message);
  } else {
    res.status(422).send({ error: "Not all required fields are present" });
  }
});

app.get("/messages/:id/comments", (req, res) => {
  const { id } = req.params;

  if (id) {
    const messageComments = comments.filter(c => c.messageId === parseInt(id));

    res.send(messageComments);
  } else {
    res.sendStatus(404);
  }
});

app.post("/messages/:id/comments", (req, res) => {
  const { id } = req.params;

  if (!id) return res.sendStatus(404);

  const comment = new Comment({ ...req.body, messageId: parseInt(id) });

  if (comment.isValid) {
    comment.assignId();
    comments.push(comment);

    return res.send(comment);
  }

  res.status(422).send({ error: "Not all fields have been provided" });
});

app.listen(PORT, () => console.log("The server is listening on port", PORT));

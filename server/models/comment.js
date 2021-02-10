let id = 1000;

class Comment {
  constructor(props) {
    this.body = props.body;
    this.email = props.email;
    this.firstName = props.firstName;
    this.lastName = props.lastName;
    this.messageId = props.messageId;
    this.createdAt = new Date();
  }

  get isValid() {
    return this.body && this.email && this.firstName && this.lastName && this.messageId
  }

  assignId() {
    this.id = id++;
  }
}

module.exports = Comment;

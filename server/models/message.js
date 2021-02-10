let id = 1000;

class Message {
  constructor(props) {
    this.avatar = props.avatar;
    this.body = props.body;
    this.createdAt = new Date();
    this.email = props.email;
    this.firstName = props.firstName;
    this.id = null;
    this.lastName = props.lastName;
    this.title = props.title;
    this.category = props.category;
    this.updatedAt = null;
  }

  get isValid() {
    return this.title && this.body && this.email && this.firstName && this.lastName && this.category;
  }

  assignId() {
    this.id = id++;
  }

  update({ title, body }) {
    this.title = title || this.title;
    this.body = body || this.body;
    this.updatedAt = new Date();
  }
}

module.exports = Message


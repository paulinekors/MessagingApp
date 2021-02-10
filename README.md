# Assignment

## Running the server

1. Clone this repository
2. `cd assignment`
3. Run `yarn && yarn dev`

The server is now available on localhost 3000.

## Models

### Message

Attributes:

```
avatar
body
createdAt
email
firstName
lastName
title
updatedAt
createdAt
id
```

### Comment

Attributes:

```
body
messageId
createdAt
```

## Endpoints

You can access the resource based on the following endpoints:

### Messages

```
get)     messages
get)     messages/:id
post)    messages
patch)   messages/:id
delete)  messages/:id
```

### Get /messages

Returns a list of messages.

Optional parameters:

```
limit # the number of messages to fetch
offset # the offset
```

Fields exposed:

```
body
createdAt
firstName
id
title
updatedAt
```

### Get /messages/:id

Returns a single message.

Fields exposed:

```
avatar
body
createdAt
email
firstName
id
lastName
title
updatedAt
```

### Post /messages

Allows creation of a message.

Required parameters

```
body
title
email
firstName
lastName
title
```

### Patch (update) /messages:id

Allows updating the body or the title.

Parameters:

```
title
body
```

### Delete /messages:id

Allows deleting a message based on its id.

## Comments

```
get)     messages/:id/comments
post)    messages/:id
```

### Get /messages/:id/comments

Gets all the comments belonging to a message

### Post /messages/:id/comments

Allows creating a message

```
body
email
firstName
lastName
```

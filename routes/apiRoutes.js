const db = require("../db/db.json");
const fs = require('fs');
const app = require('express').Router();

// npm packages to create uniqid id
var uniqid = require('uniqid');


// read the db.json file and return all saved notes as JSON
app.get('/notes', (req, res) => {
  res.json(db);
});

// POST: to receive a new note to save on the request body. Add the note to db.json, and then return it to the client.
app.post('/notes', (req, res) => {

  // create the note body
  const userNote = req.body;
  userNote.id = uniqid();

  console.log(req.body);
  // Push the note body to the db.json
  db.push(userNote);
  fs.writeFileSync('db/db.json', JSON.stringify(db));
  res.json(db);
});

module.exports = app;


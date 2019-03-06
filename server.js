const express = require("express");
const app = express();
const sets = require("./boilerset");

const PORT = process.env.PORT || 5000;

// Route to get all sets
app.get("/api/sets", (req, res) => {
  res.json(sets);
});

// Route to get set by id
app.get("/api/:id", (req, res) => {
  let set = sets[req.params.id];
  res.json(set);
});

app.listen(PORT);
console.log(`Server running on ${PORT} `);

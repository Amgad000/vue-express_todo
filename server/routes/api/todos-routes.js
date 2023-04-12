const express = require("express");
const router = express.Router();

const Todo = require("../../models/todoSchema");

// GET
router.get("/", (req, res) => {
  if (req.isAuthenticated()) {
    Todo.find()
      .then((response) => {
        res.json({data: response, status: "user"});
      })
      .catch((err) => {
        console.log(err);
      });
  } else {
    Todo.find()
      .then((response) => {
        res.json({data: response, status: "notuser"});
      })
      .catch((err) => {
        console.log(err);
      });
  }
});

// POST
router.post("/", (req, res) => {
  const todo = new Todo(req.body);

  todo
    .save()
    .then((response) => {
      // console.log(response);
      res.status(201).send();
    })
    .catch((err) => console.log(err));
});

// DELETE
router.delete("/:id", (req, res) => {
  if (req.isAuthenticated()) {
    Todo.findByIdAndDelete(req.params.id)
      .then((response) => {
        // console.log(response);
        res.status(200).send();
      })
      .catch((err) => console.log(err));
  } else {
    res.send("You are not authonticated!");
  }
});

// Get specific
router.get("/:id", (req, res) => {
  if (req.isAuthenticated()) {
    Todo.findById(req.params.id)
      .then((response) => res.send(response))
      .catch((err) => res.send(err));
  } else {
    res.send("You are not authenticated!");
  }
});
// UPDATE or upsert
// upsert (if not find id it will create new todo)
router.put("/edit/:id", (req, res) => {
  Todo.findByIdAndUpdate(req.params.id, req.body, {
    setDefaultsOnInsert: true,
    new: true,
    upsert: true,
  })
    .then((response) => {
      res.status(200).send(response);
    })
    .catch((err) => console.log(err));
});

module.exports = router;

const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
const mongoose = require("mongoose");
const cors = require("cors");
const helmet = require("helmet");

app.use(cors());
app.use(helmet());

// for POST/PUT methods
app.use(express.json());
app.use(express.urlencoded({extended: true}));

mongoose
  .connect(
    "mongodb+srv://todo_one:DvSnwgp3cNDr5pCE@cluster0.6bu2e4h.mongodb.net/todo-vue?retryWrites=true&w=majority"
  )
  .then((result) => {
    app.listen(port, () => {
      console.log(`Example app listening on port http://localhost:${port}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });

// app.get("/", (req, res) => {
//   res.send("Hello World!");
// });

// calling router
const todoRouter = require("./routes/api/todos-routes");

app.use("/api/todos/", todoRouter);

// Handling production
if (process.env.NODE_ENV === "production") {
  // statci folder
  app.use(express.static(__dirname + "/public/"));

  // handle single page application
  app.get(/.*/, (req, res) => {
    res.sendFile(__dirname + "/public/index.html");
  });
}

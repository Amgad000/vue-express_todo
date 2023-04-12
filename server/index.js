const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
const mongoose = require("mongoose");
const cors = require("cors");
const helmet = require("helmet");
const dbConfig = require("./config/database");

// session support
const passport = require("passport");
const session = require("express-session");

app.use(cors());
app.use(helmet());

// for POST/PUT methods
app.use(express.json());
app.use(express.urlencoded({extended: true}));

// Database connection
const connection = mongoose
  .connect(dbConfig.database)
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

// session and mongstore : connect the db to express-session
const MongoStore = require("connect-mongo");

app.use(
  session({
    secret: "env secret",
    resave: false,
    saveUninitialized: false,
    store: MongoStore.create({
      mongoUrl: dbConfig.database,
      // mongoOptions: {
      //   useNewUrlParser: true,
      //   useUnifiedTopology: true,
      // },
    }),
    cookie: {
      maxAge: 1000 * 60 * 60, // an hour!!!
    },
  })
);

// passport config
require("./config/passport")(passport);
app.use(passport.initialize());
app.use(passport.session());

// calling router
const todoRouter = require("./routes/api/todos-routes");
const userRouter = require("./routes/api/users-routes");

app.use("/api/users/", userRouter);
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

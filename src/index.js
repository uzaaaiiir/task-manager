const express = require("express");

// connect to db
require("./db/mongoose"); // ensures the file runs

// routers
const userRouter = require("./routers/user");
const taskRouter = require("./routers/task");

const app = express();
const port = process.env.PORT;

app.use(express.json());
app.use(userRouter);
app.use(taskRouter);

app.post("/post", (req, res) => {
  console.log("Connected to react");
  res.redirect("/");
});

// start server
app.listen(port, () => {
  console.log(`Server is up on port ${port}`);
});

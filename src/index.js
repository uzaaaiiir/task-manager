const express = require("express");

// connect to db
require("./db/mongoose"); // ensures the file runs

// routers
const userRouter = require("./routers/user");
const taskRouter = require("./routers/task");

// cross origin resource sharing
const cors = require("cors");

const app = express();
const port = process.env.PORT;

app.use(cors());
app.use(express.json());
app.use(userRouter);
app.use(taskRouter);

// start server
app.listen(port, () => {
  console.log(`Server is up on port ${port}`);
});

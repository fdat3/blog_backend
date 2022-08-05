const express = require("express");
const bodyParser = require("body-parser");
const { userRouter } = require("./router");

const app = express();

const PORT = process.env.PORT || 5000;

app.use(bodyParser.urlencoded());
app.use(bodyParser.json());

app.use("/user", userRouter);

app.get("/", (req, res) => {
  res.json({
    message: "Hello World",
  });
});

app.listen(PORT, () => {
  console.log(`Server is running at port ${PORT}`);
});

console.log("hello");

const express = require("express");

const app = express();
app.use(express.json());
const cors = require("cors");
app.use(cors());

const { selectUser, addUser } = require("./users");

app.get("/users", async (req, res) => {
  const list = await selectUser();
  res.json(list);
});

app.post("/shrikant", async (req, res) => {
  const user = req.body;
  await addUser(user);
  res.json({ message: "User Added Successfully" });
});

app.listen(5000, () => {
  console.log("WELCOME TO CDAC MUMBAI");
});

const express = require("express");
const app = express();
const morgan = require("morgan")
const cors = require("cors");
const routes = require("./routes");

app.use(morgan('tiny'))
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Welcome to Book Manager API.")
});

app.use("/books", routes)

app.use("*", (req, res) => {
  res.status(404).json("Not found");
});

app.use((err, req, res, next) => {
  console.log('Error: ', err)
  res.status(500).json('Internal Server Error')
});

app.listen(process.env.PORT || 3000, () => {
  console.log("Running on port", process.env.PORT || 3000);
});

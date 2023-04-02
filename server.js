require("dotenv").config();
const express = require("express");

const app = express();

app.use(require("cors")());
app.use(require("morgan")("tiny"));
app.use(express.json());

app.get("/ping", (req, res) => {
  res.send({ PING: "PONG" });
});

const PORT = process.env.PORT || 3000;
const HOST = process.env.HOST || "0.0.0.0";

const server = app.listen(PORT, HOST, (err) => {
  if (err) console.log(err);
  console.log(`[ 🔥 SERVER ] Listening: http://${HOST}:${PORT}`);
});

process.on("SIGINT", () => {
  server.close(() => {
    console.log("\n 🛑 Shuting Down Server......");

    process.exit();
  });
});

module.exports = app;

const express = require("express");
const path = require("path");
require("dotenv").config();

const PORT = process.env.SERVER_PORT;
const app = express();

app.use(express.static(path.join(__dirname, "dist")));
app.get("*", (_, res) => {
  res.sendFile(path.join(__dirname, "dist", "index.html"));
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});

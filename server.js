const express = require("express");
const path = require("path");

const app = express();
const port = Number(process.env.PORT) || 3000;

app.use(express.static(path.join(__dirname, "public")));

app.get("/", (_req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.listen(port, "0.0.0.0", () => {
  console.log(`Read Easy static (landing + pill) at http://0.0.0.0:${port}`);
});

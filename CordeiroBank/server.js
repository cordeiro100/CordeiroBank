const express = require("express");
const app = express();

const PORT = process.env.PORT || 8080;

app.use(express.static(__dirname + "/dist/cordeiro-bank"));

app.get("/*", (req, res) => {
  res.sendFile(__dirname + "/dist/cordeiro-bank/index.html");
});

app.listen(PORT, () => {
  console.log("Servidor inciiado na porta" + PORT);
});

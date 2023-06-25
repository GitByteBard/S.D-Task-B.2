const express = require("express");
const app = express();

app.get("/data", (req, res) => {
  const data = { message: "Пример данных" };
  res.json(data);
});

app.listen(3000, () => {
  console.log("Сервер запущен на порту 3000");
});

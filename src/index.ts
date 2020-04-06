import express from "express";
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Olá estágio bit!");
});

app.listen(port, () => {
  // tslint:disable-next-line:no-console
  console.log(`Servidor rodando na porta ${port}`);
});

const express = require("express");
const app = express();

app.get("/", function (req, res) {
  res.json({ message: "Hello Cypress Vicente de Almeida" });
});

app.get("/avengers", function (req, res) {
  var avengers = [
    "Tony Stark",
    "Clint Barton",
    "Natasha Romanoff",
    "Steve Rogers",
    "Vicente Almeida",
    "Homem Formiga",
  ];
  return res.json({ data: avengers });
});

app.get("/cnh", function (req, res) {
  const idade = req.query.idade;
  if (!idade) {
    res.json({message:"Idade é um campo obrigatório."});
    return;
  }

  var idadeNum = parseInt(idade);
  if (idadeNum >= 18) {
    res.json({message:"OK,você pode tirar sua CNH."});
  } else if (idadeNum > 4) {
    res.json({message:"Voce é menor de idade e ainda não pode tirar a CNH,sugiro andar de bike."});
  } else {
    res.json({message:"Você é menor de idade e ainda não pode tirar a CNH!!"});
  }
});

app.listen(3000);

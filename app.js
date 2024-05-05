const express = require("express");
const app = express();
const port = 3000;
const cors = require("cors");
const bodyParser = require("body-parser");
app.use(bodyParser());
app.use(cors());
var posts = [
  { titre: "Poste 1", date: "10/02/2000", lieu: "Alger" },
  { titre: "Poste 2", date: "05/02/2000", lieu: "Chlef" },
  { titre: "Poste 3", date: "20/10/2010", lieu: "Oued souf" },
];

// Méthode : GET
// Chemin : localhost:3000/posts
// retourne la liste des postes

app.get("/posts", (req, res) => res.json(posts));

// Méthode : POST
// Chemin : localhost:3000/ajouter
// Envoie des données à travers le body
// Retourne succés ou erreur
app.post("/ajouter", (req, res) => {
  const body = req.body;
  console.log(req.body);
  if (body.title == "") {
    res.status(400).send("Erreur: Titre vide!");
  } else if (Number(body.prix) > 200) {
    res.status(400).json("Erreur: Prix maximum doit être 200!");
  } else {
    res.json("Votre article a été publié");
  }
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));

// LE SERVEUR A BESOIN :
//   - une méthode : GET/POST/PUT/delete
//   - un chemin : ouedkniss.com/addVehicule - localhost:3000/home
//   - Le serveur doit être configuré pour accepter çà

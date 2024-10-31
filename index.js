// Import des modules
import dotenv from 'dotenv';
import cowsay from 'cowsay';

// Charge les variables d'environnement
dotenv.config();

// Récupérer les variables NAME et CAMPUS depuis le fichier .env
const name = process.env.NAME;
const campus = process.env.CAMPUS;

// Afficher le message avec cowsay
console.log(
  cowsay.say({
    text: `Hello! I'm ${name} from ${campus}!`,
    e: "oO", // Les yeux de la vache
    T: "U ", // La langue de la vache
  })
);

 
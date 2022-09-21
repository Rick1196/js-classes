import fetch from "node-fetch";
import { argv } from "node:process";
console.log(argv);
const fetchPokemon = async () => {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${argv[2]}`);
  const result = await response.json();
  console.log(result);
};

fetchPokemon();

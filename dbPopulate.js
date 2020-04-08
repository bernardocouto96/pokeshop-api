const axios = require("axios");

const pokeApiUrl = "https://pokeapi.co/api/v2";
const pokeStoreApiUrl = "http://localhost:3000";

var pokemonNumbers = [...Array(151).keys()];

pokemonNumbers.map(async number => {
  const { data } = await axios.get(`${pokeApiUrl}/pokemon/${number + 1}`);

  const request = {
    number: data.id,
    name: data.name,
    type: data.types.map(type => type.type.name),
    image: data.sprites.front_default,
    price: Math.floor(Math.random() * (1000 - 10 + 1) + 10)
  };

  try {
    await axios.post(`${pokeStoreApiUrl}/pokemon`, request);
    console.log(`${data.name} cadastrado com sucesso`);
  } catch (error) {
    console.log(`${data.name} não pode ser cadastrado`);
  }

  return;
});

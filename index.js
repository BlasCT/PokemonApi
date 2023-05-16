const pokemonForm = document.querySelector("#pokemon-form");
const result = document.querySelector(".result");

pokemonForm.addEventListener("submit", async function (event) {
  event.preventDefault();
  const pokemonName = event.target[0].value;

  const response = await fetch(
    `https://pokeapi.co/api/v2/pokemon/${pokemonName.toLowerCase()}`
  );

  if (!response.ok) {
    alert("El pokemon no existe");
    return;
  }
  const pokeData = await response.json();
  console.log(pokeData)

  result.innerHTML = ` 
  <div>
        <img id="imgPoke" src="${pokeData.sprites.other["official-artwork"].front_shiny}">
        <h2>${pokeData.name}</h2>
  </div>
  
  `;
});

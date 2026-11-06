async function buscarPokemon(nombre) {
  const url = `https://pokeapi.co/api/v2/pokemon/${nombre}`;

  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`HTTP ${response.status}`);
    }

    const data = await response.json();

    const pokemon = {
      "nombre": data.name,
      "id": data.id,
      "altura": data.height,
      "peso": data.weight
    };

    console.log(pokemon);
  } catch (error) {
    console.error("Error:", error.message);
  }
}

buscarPokemon("pikachu");
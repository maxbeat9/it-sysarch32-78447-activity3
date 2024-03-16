import React, { useState, useEffect } from 'react';

function Pokedex() {
  const [pokemonDetails, setPokemonDetails] = useState([]);

  useEffect(() => {
    fetch('https://us-central1-it-sysarch32.cloudfunctions.net/pokemon')
      .then(response => response.json())
      .then(data => setPokemonDetails(data));
  }, []);

  return (
    <div>
      {pokemonDetails.map((pokemon, index) => (
        <div className="cardpokemon" key={index}>
          <img className="pic" alt="Pokemon Picture" src={pokemon.image} />
          <h2 className="id">{pokemon.id}</h2>
          <h2 className="name">{pokemon.name.english}</h2>
          <h2 className="type">{pokemon.type.join(", ")}</h2>
          <h3 className="base">
            HP: {pokemon.base.HP}, Attack: {pokemon.base.Attack}, Defense: {pokemon.base.Defense}, 
            Sp. Attack: {pokemon.base.Sp_Attack}, Sp. Defense: {pokemon.base.Sp_Defense}, Speed: {pokemon.base.Speed}
          </h3>
        </div>
      ))}
    </div>
  );
}

export default Pokedex;
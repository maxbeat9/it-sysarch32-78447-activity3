import React, { useState, useEffect } from 'react';

function Pokedex() {
  const [pokemonDetails, setPokemonDetails] = useState([]);
  const [language, setLanguage] = useState('english');

  useEffect(() => {
    fetch('https://us-central1-it-sysarch32.cloudfunctions.net/pokemon')
      .then(response => response.json())
      .then(data => setPokemonDetails(data));
  }, []);

  const handleLanguageChange = (newLanguage) => {
    setLanguage(newLanguage);
  };

  return (
    <div>
      <div className="language-buttons">
        <button onClick={() => handleLanguageChange('english')}>English</button>
        <button onClick={() => handleLanguageChange('japanese')}>Japanese</button>
        <button onClick={() => handleLanguageChange('chinese')}>Chinese</button>
        <button onClick={() => handleLanguageChange('french')}>French</button>
      </div>
      {pokemonDetails.map((pokemon, index) => (
        <div className="cardpokemon" key={index}>
          <img className="pic" alt="Pokemon Picture" src={pokemon.image} />
          <h2 className="id">{pokemon.id}</h2>
          <h2 className="name">{pokemon.name[language]}</h2>
          {pokemon.type.length === 1 ? (
            <h2 className="type">Type: {pokemon.type[0]}</h2>
          ) : (
            <>
              <h2 className="type">{pokemon.type[0]}</h2>
              <h2 className="type2"> {pokemon.type[1]}</h2>
            </>
          )}
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
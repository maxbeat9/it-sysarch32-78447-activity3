const pokemonDetails = [
    {
      id: "001",
      name: {
        english: "Bulbasaur",
        japanese: "フシギダネ",
        chinese: "妙蛙种子",
        french: "Bulbizarre",
      },
      type: ["Grass", "Poison"],
      base: {
        HP: 45,
        Attack: 49,
        Defense: 49,
        Sp_Attack: 65,
        Sp_Defense: 65,
        Speed: 45,
      },
      image: "https://it-sysarch32.web.app/assets/001.png",
    },
  ];
  
  function Pokedex() {
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
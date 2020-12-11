import React from 'react';
import ReactDOM from 'react-dom';

class PokemonList extends React.Component {
  render() {
    const pokedex = [
      { number: '001', name: 'Bulbasaur' },
      { number: '004', name: 'Charmander' },
      { number: '007', name: 'Squirtle' },
      { number: '025', name: 'Pikachu' },
      { number: '039', name: 'Jigglypuff' }
    ];

    return (
      <ul>
        {pokedex.map(pokemon =>
          <li key={pokemon.number}>
            {pokemon.name}
          </li>
        )}
      </ul>
    );
  }
}

ReactDOM.render(
  <PokemonList/>,
  document.getElementById('root')
);

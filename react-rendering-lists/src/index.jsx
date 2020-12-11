import React from 'react';
import ReactDOM from 'react-dom';

const pokedex = [
  { number: '001', name: 'Bulbasaur' },
  { number: '004', name: 'Charmander' },
  { number: '007', name: 'Squirtle' },
  { number: '025', name: 'Pikachu' },
  { number: '039', name: 'Jigglypuff' }
];

const pokedexList = pokedex.map((value) =>
  <li>{value.name}</li>
);

ReactDOM.render(
  <ul>{pokedexList}</ul>,
  document.getElementById('root')
);

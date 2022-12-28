import React from 'react';
import ReactDOM from 'react-dom/client';

const pokedex = [
  { number: '001', name: 'Bulbasaur' },
  { number: '004', name: 'Charmander' },
  { number: '007', name: 'Squirtle' },
  { number: '025', name: 'Pikachu' },
  { number: '039', name: 'Jigglypuff' }
];

function PokemonList(props) {
  const listItems = pokedex.map(names =>
    <li key={names.number}>{names.name}</li>
  );

  return (
    <ul>
      {listItems}
    </ul>
  );
}

const container = document.querySelector('#root');
const root = ReactDOM.createRoot(container);

root.render(<PokemonList />);

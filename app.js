/*
 * Module dependecies
 */
import React from 'react';
import PokeTable from './components/PokeTable';

var pokemons = [{
        number: 1,
        name: 'Bulbasaur'
    }, {
        number: 2,
        name: 'Ivysaur'
    }, {
        number: 3,
        name: 'Venusaur'
    }],
    pokemon = pokemons[0];

React.render( < PokeTable pokemons = {pokemons} />,  document.getElementById("container"));

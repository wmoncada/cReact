/*
 * Module dependecies
 */
import React from 'react';
import PokeTable from './PokeTable';
import PokeChat from './PokeChat';

export default class PokeApp extends React.Component {
    constructor(props) {
		super(props);
		this.state = { messages: [] };
		this.onGrowl = this.onGrowl.bind(this);
	}

	onGrowl(name) {
		var text = `${name}, ${name}!`;
		this.state.messages.push({text: text});
		var messages = this.state.messages;
		this.setState({messages: messages});
	}

    render() {
        var pokemons = [
        	{ number: 1, name: 'Bulbasaur' }, 
        	{ number: 2, name: 'Ivysaur' }, 
        	{ number: 3, name: 'Venusaur' }
        ];

        return <div className = "pokeapp">
            <PokeTable pokemons={pokemons} onGrowl={this.onGrowl} / >
            <PokeChat messages={this.state.messages} />
            </div>
    }
}

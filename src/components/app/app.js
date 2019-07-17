import React from 'react';
import './app.css'
import Header from '../header/header.js'
import RandomPlanet from '../random-planet/random-planet.js'
import ItemList from '../item-list/item-list.js'
import PersonDetails from '../person-details/person-details.js'
import ErrorSign from '../error-sign/error-sign.js'
import ErrorButton from '../error-button/error-button.js'
import PeoplePage from '../people-page/people-page';
import SwapiService from '../../services/swapi-service';


class App extends React.Component {

	swapiService = new SwapiService();

	state = {
		showRandomPlanet: true,
		hasError: false
	};


	componentDidCatch() {
		this.setState({hasError: true})
	}
	render () {

		if (this.state.hasError) {
			return <ErrorSign />
		}
		const planet = this.state.showRandomPlanet ? <RandomPlanet /> : null;
		return(
			<div className='app'>
				<Header />
				{planet}
				<PeoplePage />

			</div>
		)
	}	
}

export default App;
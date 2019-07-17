import React from 'react';
import './random-planet.css';
import SwapiService from '../../services/swapi-service.js'
import Spinner from '../spinner/spinner.js'
import img from './yoda1.png'


class RandomPlanet extends React.Component {

	swapiService = new SwapiService();

	state = {
		planet: {},
		loading: true
	};

	constructor() {
		super();
		this.updatePlanet();
	}
	
	componentDidMount() { 
		this.updatePlanet(); 
		this.interval = setInterval(this.updatePlanet,4000)
	}
	//Dom уже создан

	componentWillUnmount() {
		clearInterval(this.interval);
	}
	
	onPlanetLoaded = (planet) => {
		this.setState({
			planet,
			loading: false,
			error: false
		});
	};

	onError = (err) => {
		this.setState({
			error:true,
			loading:false
		});
	};

	updatePlanet = () => {
		const id = Math.floor(Math.random() * 23) + 3 ;
		this.swapiService
			.getPlanet(id)
			.then(this.onPlanetLoaded)
			.catch(this.onError)
	}

	render() {

		const { planet, loading, error } = this.state;

		const spinner = loading ? <Spinner /> : null;
		const content = !loading ? <PlanetView planet={planet} /> : null;


		return (

			<div className='random-planet jumbotron'>
				{spinner}
				{content}
				<img className='img-item' src={img}></img>
			</div>
			
		)
	}
}

const PlanetView = ({ planet }) => {
	const { id, name, population,
		rotationPeriod, diameter } = planet;

	return (
		<React.Fragment>
			<div className ='planet-wrapper'>	
				<div className='planet-image'>
					<img className='planetImg'
						src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`} 
						alt='Dart Vader stole this picture from API...'/>
				</div>

				<div className='planet-info'>
					<h2>{name}</h2>
					<ul>
						<li>
							<span className='param'>Population :</span>
							<span>{population}</span>
						</li>
						<li>
							<span className='param'>Rotation Period :</span>
							<span>{rotationPeriod}</span>
						</li>
						<li>
							<span className='param'>Diameter :</span>
							<span>{diameter}</span>
						</li>

					</ul>
				</div>
			</div>
			
		</React.Fragment>
	)
}


export default RandomPlanet;
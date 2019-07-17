import React from 'react';
import './person-details.css';
import SwapiService from '../../services/swapi-service.js';
import Spinner from '../spinner/spinner.js';
import ErrorButton from '../error-button/error-button';

class PersonDetails extends  React.Component {

	swapiService = new SwapiService();

	state = {
		person: null
	};

	componentDidMount(){
		this.updatePerson();
	}
	componentDidUpdate(prevProps){
		if(this.props.personId !== prevProps.personId) {
			this.updatePerson()
		}
	}
	updatePerson() {
		const { personId } = this.props;
		if (!personId) {
			return;
		}
		this.swapiService
			.getPerson(personId)
			.then((person) => {
				this.setState({person});
			})
	}
	
	render(){

		if (!this.state.person) {
			return <Spinner />
		}
		const  {id, name, gender, height,mass, hair_color, birth_year, eye_color} = this.state.person;
		return (

			<div className='person-details'>
				<div className='person-img'>
					<img className='person-image'
						src= {`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`}
						alt="character" />
				</div>
				<div className='person-info'>
					<h3>{name}</h3>
					<ul>
						<li>
							<span>Gender : {gender}</span>
						</li>
						<li>
							<span>Height : {height}</span>
						</li>
						<li>
							<span>Mass : {mass} kg</span>
						</li>
						<li>
							<span>Eye color : {eye_color}</span>
						</li>
						<li>
							<span>Hair color : {hair_color}</span>
						</li>
						<li>
							<span>Birth year : {birth_year}</span>
						</li>
					</ul>
					<ErrorButton />
				</div>
			</div>
		)
	}
}

export default PersonDetails;
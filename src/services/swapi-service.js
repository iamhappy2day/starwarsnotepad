class SwapiService {
	
	async getResource (url) {
		const res = await fetch(url);

		if (!res.ok) {
			throw new Error(`Could not fetch ${url}` + 
				`received ${res.status}`)
		}

		return await res.json();
	}

	 getAllPeople = async () => {
		const res = await this.getResource('https://swapi.co/api/people/')
		return res.results.map(this.transformPerson);
	}

	 getPerson = async (id) => {
		const person = await this.getResource(`https://swapi.co/api/people/${id}/`)
		return this.transformPerson(person);
	}

	 getAllPlanets = async () => {
		const res = await this.getResource('https://swapi.co/api/planets/');
		return res.results.map(this.transformPlanet);
	}

	getPlanet = async (id) => {
		const planet = await this.getResource(`https://swapi.co/api/planets/${id}/`)
		return this.transformPlanet(planet);
	}

	getAllStarships = async () => {
		const res = await this.getResource('https://swapi.co/api/starships/')
		return res.results.map(this.transformStarship);
	}

	getStarship = async (id) => {
		return this.getResource(`https://swapi.co/api/starships/${id}/`)
	}

	extractId = (item) => {
		const idRegExp = /\/([0-9]*)\/$/;
		return item.url.match(idRegExp)[1];
	}

	transformPlanet = (planet) => {
		return { 
		id: this.extractId(planet),
		name: planet.name,
		population: planet.population,
		rotationPeriod: planet.rotation_period,
		diameter: planet.diameter
		};
	};

	transformStarship = (starship) => {

		return { 
		id: this.extractId(starship),
		name: starship.name,
		model: starship.model,
		manufacturer: starship.manufacturer,
		costInCredits: starship.costInCredits,
		length: starship.length,
		crew: starship.crew,
		passengers: starship.passengers,
		cargoCapacity: starship.cargoCapacity
		}
	}

	transformPerson = (person) => {

		return { 
		id: this.extractId(person),
		name: person.name,
		gender: person.gender,
		height: person.height,
		hair_color: person.hair_color,
		mass: person.mass,
		birth_year: person.birth_year,
		eye_color: person.eye_color
		}
	}
}

export default SwapiService;
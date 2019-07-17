import React from 'react'
import './people-page.css'
import ItemList from '../item-list/item-list';
import ItemDetails from '../person-details/person-details';
import ErrorSign from '../error-sign/error-sign';
import SwapiService from '../../services/swapi-service.js'


class PeoplePage extends React.Component {
    swapiService = new SwapiService();
    
    state = {
        selectedPerson: 3,
        hasError: false
    }

    componentDidCatch(){
        this.setState({
            hasError: true
        }) 
    }
    onPersonSelected = (selectedPerson) => {
		this.setState({selectedPerson});
    };
    
    render() {
        if (this.state.hasError){
            return (
                <ErrorSign />
            )
        }
        return (
            <div className='content '>
                <ItemList
                     onItemSelected={this.onPersonSelected}
                     getData={this.swapiService.getAllPeople}/>
                <ItemDetails personId = {this.state.selectedPerson} />
            </div>
        )
    }
}

export default PeoplePage
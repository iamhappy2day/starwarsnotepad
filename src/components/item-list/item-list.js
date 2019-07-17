import React from 'react';
import './item-list.css';
import Spinner from '../spinner/spinner.js';

class ItemList extends React.Component{

	state = {
		itemList: null
	};

	componentDidMount() {

		const { getData } = this.props;

		getData()
		.then((itemList) => {
			this.setState(
				{itemList}
			)
		});
	};
	renderItems(arr) {
		return arr.map(({id,name}) => {
			return (
				<li 
					key ={id} 
					onClick={() => this.props.onItemSelected(id)}>
					{name} 
				</li>
			)
		})
	}
	render() {

		const { itemList } = this.state;

		if (!itemList) {
			return <Spinner />;
		}

		const items = this.renderItems(itemList);
		return (

			<div className='itemList'>
				<ul className='list-group'>
					{items}
				</ul>
			</div>
		)
	}
}
export default ItemList;
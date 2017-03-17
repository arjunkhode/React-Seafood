import React from 'react';
import AddFIshForm from './AddFishForm';

class Inventory extends React.Component{
	render(){
		return(
			<div>
				<h2>Inventory</h2>
				<AddFIshForm addFish={this.props.addFish}/>
				<button onClick={this.props.loadSamples}>Load sample fishes</button>
			</div>	
		)
	}
}

export default Inventory;
import React from 'react';
import AddFIshForm from './AddFishForm';

class Inventory extends React.Component{
	render(){
		return(
			<div>
				<h2>Inventory</h2>
				<AddFIshForm/>
			</div>	
		)
	}
}

export default Inventory;
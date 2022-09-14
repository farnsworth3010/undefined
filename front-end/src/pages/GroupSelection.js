import React from 'react';
import './groupselection.module.css';

import { initializeApp } from './redux/app-reducer';

class GroupSelection extends React.Component{
  constructor(props){
    super(props);
  }
  componentDidMount(){
    this.props.initializeApp();
  }
  render(){
    
		return (
			<div className="app-wrapper">

			</div>
		);
	}
}

export default GroupSelection

import React from 'react';
import { compose } from 'redux';
import './App.css';
import ScheduleContainer from './components/schedule/schedule-container';
import {connect} from 'react-redux'
import { api } from './api/api';
import { initializeApp } from './redux/app-reducer';
import { getSchedule } from './redux/schedule-reducer';
import Alarms from './components/schedule/alarms/alarms';

class App extends React.Component{
  constructor(props){
    super(props);
  }
  componentDidMount(){
    this.props.initializeApp();
  }
  render(){
		return (
			<div className="app-wrapper">
        <Alarms/>
        <ScheduleContainer/>
			</div>
		);
	}
}

const mapStateToProps = (state) => ({
  initialized: state.app.initialized,
})

export default connect(mapStateToProps, {initializeApp})(App);

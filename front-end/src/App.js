import React from 'react';
import { compose } from 'redux';
import './App.css';
import ScheduleContainer from './components/schedule/schedule-container';
import {connect} from 'react-redux'
import { api } from './api/api';
import { initializeApp } from './redux/app-reducer';
import { getSchedule } from './redux/schedule-reducer';
import Alarms from './components/schedule/alarms/alarms';
import Preloader from './components/preloader/preloader';


class App extends React.Component{
  constructor(props){
    super(props);
  }
  componentDidMount(){
    this.props.initializeApp();
    this.props.getSchedule(6);
  }
  render(){
    
		return (
			<div className="app-wrapper">
        {this.props.scheduleLoaded ? <>
          <Alarms/>
        <ScheduleContainer/>
        </> : <Preloader/>}

			</div>
		);
	}
}

const mapStateToProps = (state) => ({
  initialized: state.app.initialized,
  scheduleLoaded: state.schedule.scheduleLoaded
})

export default connect(mapStateToProps, {initializeApp, getSchedule})(App);

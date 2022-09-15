import React from 'react';
import './App.css';
import {connect} from 'react-redux'
import { initializeApp } from './redux/app-reducer';
import { getSchedule } from './redux/schedule-reducer';
import { Outlet } from 'react-router';

class App extends React.Component{
  constructor(props){
    super(props);
  }
  componentDidMount(){
    this.props.initializeApp();
    // this.props.getSchedule(6);
  }
  render(){
    
		return (
			<div className="app-wrapper">
        {/* {this.props.scheduleLoaded ? <>
          <Alarms/>
        <ScheduleContainer/>
        </> : <Preloader/>} */}
        <Outlet/>
			</div>
		);
	}
}

const mapStateToProps = (state) => ({
  initialized: state.app.initialized,
  scheduleLoaded: state.schedule.scheduleLoaded
})

export default connect(mapStateToProps, {initializeApp, getSchedule})(App);

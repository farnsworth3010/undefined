import React from 'react';
import './App.css';
import {connect} from 'react-redux'
import { initializeApp } from './redux/app-reducer';
import { getSchedule } from './redux/schedule-reducer';
import { Outlet } from 'react-router';
import Footer from './components/footer/Footer'
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
        <main>
          <h1 className='project-name'>[object Undefined]</h1>
        <Outlet/></main>
        <Footer/>
			</div>
		);
	}
}

const mapStateToProps = (state) => ({
  initialized: state.app.initialized,
  scheduleLoaded: state.schedule.scheduleLoaded
})

export default connect(mapStateToProps, {initializeApp, getSchedule})(App);

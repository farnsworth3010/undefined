import React from 'react';
import './App.css';
import {connect} from 'react-redux'
import { initializeApp } from './redux/app-reducer';
import { getSchedule } from './redux/schedule-reducer';
import { Outlet } from 'react-router';
import Footer from './components/footer/Footer'
import { Link } from 'react-router-dom';
import { resetGroup } from './redux/schedule-reducer';
class App extends React.Component{
  componentDidMount(){
    this.props.initializeApp();
  }
  render(){
    
		return (
			<div className="app-wrapper">
        <main>
        <Link to={'/undefined'} onClick={()=>{this.props.resetGroup()}}><h1 className='project-name'>[object Undefined]</h1></Link>
          
        <Outlet/>
        </main>
        <Footer/>
			</div>
		);
	}
}

const mapStateToProps = (state) => ({
  initialized: state.app.initialized,
  scheduleLoaded: state.schedule.scheduleLoaded
})

export default connect(mapStateToProps, {initializeApp, getSchedule, resetGroup})(App);

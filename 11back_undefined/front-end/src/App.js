import React from 'react';
import './App.css';
import {connect} from 'react-redux'
import { initializeApp } from './redux/app-reducer';
import { Outlet } from 'react-router';
import Footer from './components/footer/Footer'
import Header from './components/Header/Header';
import Dockbar from './components/dockbar/dockbar';

class App extends React.Component{
  componentDidMount(){
    this.props.initializeApp();
  }
  render(){
		return (
			<div className={`${"app-wrapper"}`}>
        <main>
          <Header/>
          <Outlet/>
          <Dockbar/>
        </main>
        <Footer/>
			</div>
		);
	}
}

const mapStateToProps = (state) => ({
  initialized: state.app.initialized,
  scheduleLoaded: state.schedule.scheduleLoaded,
  theme: state.app.theme
})

export default connect(mapStateToProps, {initializeApp})(App);

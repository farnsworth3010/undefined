import React from 'react';
import { connect } from 'react-redux';
import s from './groupselection.module.css';
import { Link, Navigate } from 'react-router-dom';
import { selectGroup } from '../../redux/schedule-reducer';
class GroupSelection extends React.Component{
  constructor(props){
    super(props);
  }
  componentDidMount(){
  }
  render(){
    if(this.props.group_id>=0){
      let link = '/schedule/'+this.props.group_id
      return <Navigate to={link}/>
    }
		return (
			<div className="app-wrapper">
        <Link sto={'/schedule/0'} onClick={()=>{this.props.selectGroup(0)}}><div className={s.button}>22ИСИТ1д</div></Link>
        <Link to={'/schedule/1'} onClick={()=>{this.props.selectGroup(1)}}><div className={s.button}>22МИ1д</div></Link>
        <Link to={'/schedule/2'} onClick={()=>{this.props.selectGroup(2)}}><div className={s.button}>22ПИ_ВЕБ1д</div></Link>
        <Link to={'/schedule/3'} onClick={()=>{this.props.selectGroup(3)}}><div className={s.button}>22ПИ_ПОКС1д</div></Link>
        <Link to={'/schedule/4'} onClick={()=>{this.props.selectGroup(4)}}><div className={s.button}>22ПМ1д</div></Link>
        <Link to={'/schedule/5'} onClick={()=>{this.props.selectGroup(5)}}><div className={s.button}>22ПОИТ1д</div></Link>
        <Link to={'/schedule/6'} onClick={()=>{this.props.selectGroup(6)}}><div className={s.button}>22УИР1д</div></Link>
        <Link to={'/schedule/7'} onClick={()=>{this.props.selectGroup(7)}}><div className={s.button}>22ФИЗ1д</div></Link>

			</div>
		);
	}
}

const mapStateToProps = (state) => ({
  group_id: state.schedule.group_id
})

export default connect(mapStateToProps, {selectGroup})(GroupSelection)

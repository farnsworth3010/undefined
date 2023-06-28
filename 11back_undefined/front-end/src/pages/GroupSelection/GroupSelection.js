import React from 'react';
import { connect } from 'react-redux';
import s from './groupselection.module.css';
import { Link, Navigate } from 'react-router-dom';
import { selectGroup } from '../../redux/schedule-reducer';
class GroupSelection extends React.Component{
  componentDidMount(){
  }
  render(){
    if(this.props.group_id>=0){
      let link = '/VSUschedule/schedule/'+this.props.group_id
      return <Navigate to={link}/>
    }
		return (
			<div className="app-wrapper">
        <div className={s.animationContainer}>
        <a href={'https://vsu.by/platnie-uslygi/menyu-stolovoj.html'} ><div className={s.button}>Меню столовой</div></a>

          <h1>Курс 1 🐤</h1>
        <Link to={'/VSUschedule/schedule/10'} onClick={()=>{this.props.selectGroup(10)}}><div className={s.button}>22ИСИТ1д</div></Link>
        <Link to={'/VSUschedule/schedule/11'} onClick={()=>{this.props.selectGroup(11)}}><div className={s.button}>22МИ1д</div></Link>
        <Link to={'/VSUschedule/schedule/12'} onClick={()=>{this.props.selectGroup(12)}}><div className={s.button}>22ПИ_ВЕБ1д</div></Link>
        <Link to={'/VSUschedule/schedule/13'} onClick={()=>{this.props.selectGroup(13)}}><div className={s.button}>22ПИ_ПОКС1д</div></Link>
        <Link to={'/VSUschedule/schedule/14'} onClick={()=>{this.props.selectGroup(14)}}><div className={s.button}>22ПМ1д</div></Link>
        <Link to={'/VSUschedule/schedule/15'} onClick={()=>{this.props.selectGroup(15)}}><div className={s.button}>22ПОИТ1д</div></Link>
        <Link to={'/VSUschedule/schedule/16'} onClick={()=>{this.props.selectGroup(16)}}><div className={s.button}>22УИР1д</div></Link>
        <Link to={'/VSUschedule/schedule/17'} onClick={()=>{this.props.selectGroup(17)}}><div className={s.button}>22ФИЗ1д</div></Link>
        <h1>Курс 2 🤖</h1>
        <Link to={'/VSUschedule/schedule/20'} onClick={()=>{this.props.selectGroup(20)}}><div className={s.button}>21ИСИТ1д</div></Link>
        <Link to={'/VSUschedule/schedule/21'} onClick={()=>{this.props.selectGroup(21)}}><div className={s.button}>21КБ1д</div></Link>
        <Link to={'/VSUschedule/schedule/22'} onClick={()=>{this.props.selectGroup(22)}}><div className={s.button}>21ПИ_ВЕБ1д</div></Link>
        <Link to={'/VSUschedule/schedule/23'} onClick={()=>{this.props.selectGroup(23)}}><div className={s.button}>21ПИ_ПОКС1д</div></Link>
        <Link to={'/VSUschedule/schedule/24'} onClick={()=>{this.props.selectGroup(24)}}><div className={s.button}>21ПМ1д</div></Link>
        <Link to={'/VSUschedule/schedule/25'} onClick={()=>{this.props.selectGroup(25)}}><div className={s.button}>22ПОИТ1д</div></Link>
        <Link to={'/VSUschedule/schedule/26'} onClick={()=>{this.props.selectGroup(26)}}><div className={s.button}>21УИР1д</div></Link>

        <h1>Курс 3 💻</h1>
        <Link to={'/VSUschedule/schedule/30'} onClick={()=>{this.props.selectGroup(30)}}><div className={s.button}>УИР</div></Link>
        <Link to={'/VSUschedule/schedule/31'} onClick={()=>{this.props.selectGroup(31)}}><div className={s.button}>ПОИТ</div></Link>
        <Link to={'/VSUschedule/schedule/32'} onClick={()=>{this.props.selectGroup(32)}}><div className={s.button}>ПМ</div></Link>
        <Link to={'/VSUschedule/schedule/33'} onClick={()=>{this.props.selectGroup(33)}}><div className={s.button}>КБ</div></Link>

        <h1>Курс 4 🧓🏼</h1>
        <Link to={'/VSUschedule/schedule/40'} onClick={()=>{this.props.selectGroup(30)}}><div className={s.button}>ПОИТ</div></Link>
        <Link to={'/VSUschedule/schedule/41'} onClick={()=>{this.props.selectGroup(31)}}><div className={s.button}>МИ</div></Link>
        <Link to={'/VSUschedule/schedule/42'} onClick={()=>{this.props.selectGroup(32)}}><div className={s.button}>КБ</div></Link>

        </div>
			</div>
		);
	}
}

const mapStateToProps = (state) => ({
  group_id: state.schedule.group_id
})

export default connect(mapStateToProps, {selectGroup})(GroupSelection)

import React from "react"
import Dayblock from "../../components/dayblock/dayblock"
import { getSchedule } from "../../redux/schedule-reducer";
import { connect } from "react-redux";
import withRouter from '../../components/withRouter/withRouter'
import Alarms from '../../components/alarms/alarms'
import Preloader from '../../components/preloader/preloader'
import {resetGroup} from '../../redux/schedule-reducer'
import DateComponent from "../../components/date/DateComponent";
import s from "./scheduleContainer.module.css"
class ScheduleContainer extends React.Component{
    componentDidMount(){
        if(this.props.group_id){
            this.props.getSchedule(this.props.group_id)
        }
        else{
            this.props.getSchedule(this.props.params.groupId)
        }
    }
    componentWillUnmount(){

    }
    render(){
        let date = new Date()
        let day_number = date.getDay()
        let days = ["Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота", "Воскресенье"]
        let schedule = []
        let today_block; 
        let tomorrow_block;
        let tomorrow_day_number = day_number >5 ? 0 : day_number+1;
        if(this.props.schedule){
            tomorrow_block = <Dayblock
            day_name={days[tomorrow_day_number]}
                schedule={this.props.schedule.map((lesson) => {
                    return lesson
                }).filter((lesson)=>{
                    return parseInt(lesson.day_number) === tomorrow_day_number
                })}
            ></Dayblock>
            today_block = <Dayblock
            day_name={days[day_number-1]}
                schedule={this.props.schedule.map((lesson) => {
                    return lesson
                }).filter((lesson)=>{
                    return parseInt(lesson.day_number) === day_number
                })}
            ></Dayblock>
            for(let i = 0; i < 7; i++){
                if(i === 6){
                    schedule.push(<Dayblock weekend="true" key={i} day_name={days[i]} 
                        schedule={this.props.schedule.map((lesson) => {return lesson}).filter((lesson)=>{return parseInt(lesson.day_number) === i+1})}/>)
                }
                else{
                    
                schedule.push(<Dayblock key={i} day_name={days[i]}
                    schedule={this.props.schedule.map((lesson) => {return lesson}).filter((lesson)=>{return parseInt(lesson.day_number) === i+1})}/>)
                }

            }
        }

        return(
            <div>
                 <div className={s.animationContainer}>
                <DateComponent/>

                <div className="group_name">{this.props.group_name}</div>
                </div>
                {this.props.isFetching ? <Preloader lines="5"/> : <>
                <div className={s.animationContainer}>
                    <div className={s.alarmAndTodayContainer}>
                        <Alarms/>
                        <div>
                            {(date.getHours() > 17 || date.getHours() < 5) ? <><h1>Расписание на завтра:</h1> 
                            {tomorrow_block}</>
                            : <> <h1>Расписание на сегодня:</h1>
                            {today_block}</>
                            }
                            
                        </div>
                    </div>
                </div>
                <div className={s.animationContainer}>
                <h1>Расписание на неделю:</h1>
                <div className={s.scheduleContainer}>
                {schedule}
                </div>
                </div>
                </>}
			</div>
        )
    }
}

const mapStateToProps = (state) => ({
	schedule: state.schedule.schedule,
    group_id: state.schedule.group_id,
    isFetching: state.schedule.isFetching,
    group_name: state.schedule.group_name
});
export default withRouter(connect(mapStateToProps, { getSchedule, resetGroup })(ScheduleContainer));

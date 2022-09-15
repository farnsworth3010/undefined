import React from "react"
import Dayblock from "../../components/dayblock/dayblock"
import { getSchedule } from "../../redux/schedule-reducer";
import { connect } from "react-redux";
import withRouter from '../../components/withRouter/withRouter'
import Alarms from '../../components/alarms/alarms'
import Preloader from '../../components/preloader/preloader'
import { Link } from "react-router-dom";
import {resetGroup} from '../../redux/schedule-reducer'
class ScheduleContainer extends React.Component{
    constructor(props){
        super(props)
    }
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
        return(
<div>
            <Link to={'/'} onClick={()=>{this.props.resetGroup()}}>На главную</Link>
            <Alarms/>
            {this.props.isFetching ? <Preloader/> : <>
						<Dayblock
                        day_name="Понедельник"
							schedule={this.props.schedule ? this.props.schedule.map((lesson) => {
                                return lesson
							}).filter((lesson)=>{
                                return parseInt(lesson.day_number) == 1
                            }) : null}
						></Dayblock>
					<Dayblock day_name="Вторник"
							schedule={this.props.schedule ? this.props.schedule.map((lesson) => {
                                return lesson
							}).filter((lesson)=>{
                                return parseInt(lesson.day_number) == 2
                            }) : null}
						></Dayblock>
                    					<Dayblock day_name="Среда"
							schedule={this.props.schedule ? this.props.schedule.map((lesson) => {
                                return lesson
							}).filter((lesson)=>{
                                return parseInt(lesson.day_number) == 3
                            }) : null}
						></Dayblock>
                        					<Dayblock day_name="Четверг"
							schedule={this.props.schedule ? this.props.schedule.map((lesson) => {
                                return lesson
							}).filter((lesson)=>{
                                return parseInt(lesson.day_number) == 4
                            }) : null}
						></Dayblock>
                        					<Dayblock day_name="Пятница"
							schedule={this.props.schedule ? this.props.schedule.map((lesson) => {
                                return lesson
							}).filter((lesson)=>{
                                return parseInt(lesson.day_number) == 5
                            }) : null}
						></Dayblock>
                        					<Dayblock day_name="Суббота"
							schedule={this.props.schedule ? this.props.schedule.map((lesson) => (lesson)
							).filter((lesson)=>{
                                return parseInt(lesson.day_number) ==6
                            }) : null}
						></Dayblock>
                        					<Dayblock day_name="Воскресенье"
							schedule={this.props.schedule ? this.props.schedule.map((lesson) => {
                                return lesson
							}).filter((lesson)=>{
                                return parseInt(lesson.day_number) == 7
                            }) : null}
						></Dayblock>
    
					</>}
			</div>
        )
    }
}

const mapStateToProps = (state) => ({
	schedule: state.schedule.schedule,
    group_id: state.schedule.group_id,
    isFetching: state.schedule.isFetching
});
export default withRouter(connect(mapStateToProps, { getSchedule, resetGroup })(ScheduleContainer));

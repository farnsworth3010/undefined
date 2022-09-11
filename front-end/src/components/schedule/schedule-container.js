import React from "react";
import { connect } from "react-redux";
import { getSchedule } from "../../redux/schedule-reducer";
import Dayblock from "./dayblock/dayblock";

class ScheduleContainer extends React.Component {
	constructor(props) {
		super(props);
	}
	componentDidMount() {
		this.props.getSchedule();

	}
	render() {
		return (
			<div>
				{
					<>
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
    
					</>
                    
				}
			</div>
		);
	}
}

const mapStateToProps = (state) => ({
	schedule: state.schedule.schedule,
});

export default connect(mapStateToProps, { getSchedule })(ScheduleContainer);

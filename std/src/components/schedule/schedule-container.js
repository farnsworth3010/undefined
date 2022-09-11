import React from "react";
import { connect } from "react-redux";
import {getSchedule} from '../../redux/schedule-reducer'
class ScheduleContainer extends React.Component{
    constructor(props){
        super(props);
    }
    componentDidMount(){
        this.props.getSchedule();
    }
    render(){
        return(
            <div>{
            this.props.schedule.map((day)=>(
                <div>{day.room}</div>
            ))
            }</div>
        )
    }
}

const mapStateToProps = (state) => ({
    schedule: state.schedule.schedule
})



export default connect(mapStateToProps, {getSchedule})(ScheduleContainer)
import { api } from "../api/api";

const GET_SCHEDULE = "GET_SCHEDULE";
const SET_SCHEDULE = "SET_SCHEDULE";

const initialState = {
    schedule: [],
    scheduleLoaded: false
}

const scheduleReducer = (state=initialState, action) => {
    switch(action.type){
        case GET_SCHEDULE:
            return{
                ...state,
            }
        case SET_SCHEDULE:
            let schedule = action.data
            return{
                ...state,
                schedule: schedule,
                scheduleLoaded: true
            }
        default: 
            return state;
    }
}
const setSchedule = (data)=> ({type: SET_SCHEDULE, data: data})

export const getSchedule = (group_id) => async (dispatch) => {
    let response = await api.schedule.getSchedule(group_id);
    setTimeout(()=>{
        dispatch(setSchedule(response));
    }, 1000)
}

export default scheduleReducer;
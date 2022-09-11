import { api } from "../api/api";

const GET_SCHEDULE = "GET_SCHEDULE";
const SET_SCHEDULE = "SET_SCHEDULE";

const initialState = {
    schedule: []
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
            }
        default: 
            return state;
    }
}
const setSchedule = (data)=> ({type: SET_SCHEDULE, data: data})

export const getSchedule = () => async (dispatch) => {
    let response = await api.schedule.getSchedule();
    dispatch(setSchedule(response));
}

export default scheduleReducer;
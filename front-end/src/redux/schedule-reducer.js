import { api } from "../api/api";
// import store from "./store";

const SET_SCHEDULE = "SET_SCHEDULE";
const SET_GROUP = "SET_GROUP";
const IS_FETCHING = "IS_FETCHING";
const RESET_GROUP = "RESET_GROUP"
let group_id

if(localStorage.getItem("group_id")){
    group_id = parseInt(localStorage.getItem("group_id"))
    console.log(group_id)
}
else{
    group_id = undefined
}

const initialState = {
    schedule: [],
    scheduleLoaded: false,
    group_id: group_id,
    isFetching: true
}



const scheduleReducer = (state=initialState, action) => {
    switch(action.type){
        case IS_FETCHING:
            return{
                ...state,
                isFetching: action.isFetching
            }
        case RESET_GROUP:
            localStorage.clear()
            return{
                ...state,
                group_id: undefined
            }
        case SET_SCHEDULE:
            let schedule = action.data
            return{
                ...state,
                schedule: schedule,
                scheduleLoaded: true,
                isFetching: false
            }
        case SET_GROUP:
            return{
                ...state,
                group_id: action.group_id
            }
        default: 
            return state;
    }
}
const setSchedule = (data)=> ({type: SET_SCHEDULE, data: data})

export const getSchedule = (group_id) => async (dispatch) => {
    dispatch(isFetching(true))
    let response = await api.schedule.getSchedule(group_id);
    setTimeout(()=>{
        dispatch(setSchedule(response));
        dispatch(isFetching(false))
    }, 1000)
}


export const isFetching = (isFetching) => ({type: IS_FETCHING, isFetching})
export const setGroup = (group_id) => ({type: SET_GROUP, group_id})

export const selectGroup = (group_id) => async (dispatch) => {
    localStorage.setItem("group_id", group_id)
    dispatch(setGroup(group_id));
}

const resetGroupAction = ()=> ({type: RESET_GROUP})

export const resetGroup = ()=> (dispatch) => {
    dispatch(resetGroupAction())
}

export default scheduleReducer;
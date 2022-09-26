const INITIALIZED_SUCCESS = "INITIALIZED_SUCCESS";
const CHANGE_THEME = "CHANGE_THEME";

let theme;

if(localStorage.getItem("theme") != undefined){
    theme = localStorage.getItem("theme")
    document.body.classList.remove("dark")
    document.body.classList.remove("light")
    document.body.classList.add(localStorage.getItem("theme"))
}
else{
    theme = "light"
}

let initialState = {
    initialized: false,
    theme: theme
}

const appReducer = (state = initialState, action) => {
    switch(action.type){
        case INITIALIZED_SUCCESS:
            return{
                ...state,
                initialized: true,
            }
        case CHANGE_THEME:
            return{
                ...state,
                theme: action.theme
            }
        default:
            return state; 
    }
}

export const initializedSuccess = ()=>({type: INITIALIZED_SUCCESS});
export const changeThemeAction = (theme)=>({type: CHANGE_THEME, theme})

export const initializeApp = ()=> (dispatch) => {
    dispatch(initializedSuccess());
}

export const changeTheme = (theme) => (dispatch) => {
    localStorage.setItem("theme", theme)
    document.body.classList.remove("dark")
    document.body.classList.remove("light")
    document.body.classList.add(localStorage.getItem("theme"))
    dispatch(changeThemeAction(theme))
} 

export default appReducer;
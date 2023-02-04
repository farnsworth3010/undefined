import toLight from './toLight.png'
import toDark from './toDark.png'
import { connect } from 'react-redux'
import { changeTheme } from '../../redux/app-reducer'
const DarkToggle = (props) => {
    let theme = props.theme
    let toTheme = theme == "light" ? "dark" : "light"
    return(<div className={props.className} onClick={()=>{props.changeTheme(toTheme)}}>
        {theme == "light" ? <img width="30px" src={toDark}/> : <img width="30px" src={toLight}/>}
    </div>)      
}

const mapStateToProps = (state) => ({
    theme: state.app.theme
})
export default connect(mapStateToProps, {changeTheme})(DarkToggle)
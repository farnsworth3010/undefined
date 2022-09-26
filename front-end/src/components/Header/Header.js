import s from "./Header.module.css"
import DarkToggle from "../darkToggle/darkToggle"
import { Link } from 'react-router-dom';
import { resetGroup } from "../../redux/schedule-reducer";
import { connect } from "react-redux";
import BackBtn from "../BackBtn/BackBtn";
import withRouter from "../withRouter/withRouter";

const Header = (props) => {
    return(
        <nav className={s.nav}>
            {props.location.pathname != "/undefined" && props.location.pathname != "/undefined/" ? <BackBtn resetGroup={props.resetGroup} className={s.back}/> : null}

            <DarkToggle className={s.themeToggle} />
            {/* <Link to={'/undefined'} onClick={()=>{props.resetGroup()}}> */}
                <h1 className={s.project_name}>[object Undefined]</h1>
                {/* </Link> */}
        </nav>
    )
}

const mapStateToProps = (state) => ({

})

export default withRouter(connect(mapStateToProps, {resetGroup})(Header));
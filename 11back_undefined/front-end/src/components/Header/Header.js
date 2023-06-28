import s from "./Header.module.css"
import DarkToggle from "../darkToggle/darkToggle"
import { resetGroup } from "../../redux/schedule-reducer";
import { connect } from "react-redux";
import BackBtn from "../BackBtn/BackBtn";
import withRouter from "../withRouter/withRouter";
import { Link } from "react-router-dom";

const Header = (props) => {
    return(
        <nav className={s.nav}>
            {props.location.pathname != "/VSUschedule" && props.location.pathname != "/VSUschedule/" ? <BackBtn resetGroup={props.resetGroup} className={s.back}/> : null}

            <DarkToggle className={s.themeToggle} />
            <Link className={s.linkContainer} to={'/VSUschedule'} onClick={()=>{props.resetGroup()}}>
                <h1 className={s.project_name}>VSUschedule</h1>
                </Link>
        </nav>
    )
}

const mapStateToProps = (state) => ({

})

export default withRouter(connect(mapStateToProps, {resetGroup})(Header));
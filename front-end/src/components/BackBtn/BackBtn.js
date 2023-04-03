import back from "./back.svg"
import s from "./Back.module.css"
import { Link } from "react-router-dom"

const BackBtn = (props) => {
    return(
        <Link onClick={props.resetGroup} to={"/VSUschedule/"}><img  src={back} className={`${s.btn} ${props.className}`} width="30px"></img></Link>
    )
}

export default BackBtn
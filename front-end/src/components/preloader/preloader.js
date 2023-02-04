import s from './preloader.module.css'

const preloader = (props) => {
    let lines = props.lines
    let linesList = []
    for(let i = 0; i<lines; i++){
        linesList.push(<div key={i} className={s.preloader}><div className={s.line}></div><div className={s.line}></div><div className={s.line}></div></div>)
    }
    return(
        <>
        {linesList}
        </>
        )
}

export default preloader;
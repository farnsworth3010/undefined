import s from './preloader.module.css'

const preloader = () => {
    return(
        <div className={s.preloader}>
            <div className={s.line}></div>
            <div className={s.line}></div>
            <div className={s.line}></div>
        </div>
    )
}

export default preloader;
import s from "./DateComponent.module.css"

const DateComponent = (props) => {
    let date = new Date()
    let day = date.getDate()
    let month = date.getMonth()    
    let months = ["января", "февраля", "марта", "апреля", "мая", "июня", "июля", "августа", "сентября", "октября", "ноября", "декабря"]
    let hours = date.getHours()<10 ? "0"+date.getHours() : date.getHours()
    let minutes = date.getMinutes()<10 ? "0"+date.getMinutes() : date.getMinutes()
    let time = hours+":"+minutes
    let dateText = day+" "+months[month]
    return(
        <h3 className={s.date}>
            {time}
            <br/>
            {dateText}
        </h3>
    )
}

export default DateComponent
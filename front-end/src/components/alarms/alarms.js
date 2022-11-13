import s from './alarms.module.css'

const alarms = (props) => {
    return(
        <div>
        <h1>Звонки</h1>
        <div className={ `${s.alarmblock}`}>

            <ul>
                <li>
                    1. 8:00 - 9:25
                </li>
                <li>
                    2. 9:35 - 11:00
                </li>
                <li>
                    3. 11:30 - 12:55
                </li>
                <li>
                    4. 13:05 - 14:30
                </li>
                <li>
                    5. 14:40 - 16:05
                </li>
                <li>6. 16:35 - 18:00</li>
                <li>7. 18:10 - 19:35</li>
                <li>8. 19:45 - 21:10</li>
            </ul>
        </div>
        </div>
    )
}

export default alarms
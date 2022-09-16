import s from './alarms.module.css'

const alarms = (props) => {
    return(
        <div className={ `${s.alarmblock}`}>
            <h2>Звонки</h2>
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
                <li>6. 16:15 - 17:40</li>
            </ul>
        </div>
    )
}

export default alarms
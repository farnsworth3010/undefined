import s from './dayblock.module.css';

const dayblock = (props) => {
    let day = []
    
    if(props.schedule){
            for(let i = 1; i <= 8; i++){
                for(let j of props.schedule){
                    if(parseInt(j.lesson_number) == i){
                        day.push(<li>{i}. <b>{j.subject}</b><br/><span>{j.audience}</span></li>)
                    }
                }
                if(day[i-1] === undefined){
                    console.log(day)
                    day.push(<li>{i}.</li>)
                }
              }
    }

    return(
        <div className={s.dayblock}>
            <h1>{props.day_name}</h1>
            <ul>
                
                {day}
            </ul>
        </div>
    )
}

export default dayblock;
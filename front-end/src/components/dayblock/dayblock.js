import s from './dayblock.module.css';

const dayblock = (props) => {
    let day = []
    let isfirstgroup = false
    if(props.schedule){
            for(let i = 1; i <= 8; i++){
                for(let j of props.schedule){
                    if(parseInt(j.lesson_number) == i){
                        if(j.subgroup_id != null){
                            if(j.subgroup_id == 1){
                                isfirstgroup = true
                                day.push(<li className={`${isfirstgroup ? s.firstGroup : ""}`}>{i}. <b>{j.subject}</b><br/> Группа: {j.subgroup_id}<br/>{j.teacher}<span>{j.audience}</span></li>)
                            }
                            else if(j.subgroup_id == 2){
                                day.push(<li><b>{j.subject}</b><br/> Группа: {j.subgroup_id}<br/>{j.teacher}<span>{j.audience}</span></li>)
                            }

                        }
                        else{
                            day.push(<li>{i}. <b>{j.subject}</b><br/>{j.teacher}<span>{j.audience}</span></li>)
                        }
                    }
                }
                if(day[i-1] === undefined){
                    day.push(<li>{i}.</li>)
                }
              }
    }

    return(
        <div className={ `${s.dayblock}`}>
            <h1>{props.day_name}</h1>
            <ul>
                
                {day}
            </ul>
        </div>
    )
}

export default dayblock;
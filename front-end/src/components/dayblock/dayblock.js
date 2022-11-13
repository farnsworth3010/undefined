import s from './dayblock.module.css';

const dayblock = (props) => {
    let day = []
    let isfirstgroup = false
    if(props.schedule){
            for(let i = 1; i <= 8; i++){
                let added = false
                for(let j of props.schedule){
                    if(parseInt(j.lesson_number) == i){
                        if(j.subgroup_id != null){
                            if(j.subgroup_id == 1){
                                isfirstgroup = true
                                day.push(<li key={j.id} className={`${isfirstgroup ? s.firstGroup : ""}`}>{i}. <b>{j.subject}</b><br/> Группа: {j.subgroup_id}<br/>{j.teacher}<span>{j.audience}</span></li>)
                                added = true
                            }
                            else if(j.subgroup_id == 2){
                                day.push(<li key={j.id}><b>{j.subject}</b><br/> Группа: {j.subgroup_id}<br/>{j.teacher}<span>{j.audience}</span></li>)
                                added = true
                            }

                        }
                        else{
                            day.push(<li key={j.id}>{i}. <b>{j.subject}</b><br/>{j.teacher}<span>{j.audience}</span></li>)
                            added = true
                        }
                    }
                }
                if(added == false){
                    day.push(<li key={i}>{i}.</li>)
                    
                }
              }
    }

    return(
        <div className={ `${s.dayblock} ${props.weekend ? s.weekend : null}` }>
            <h2>{props.day_name}</h2>
            <ul>
                {day}
            </ul>
        </div>
    )
}

export default dayblock;
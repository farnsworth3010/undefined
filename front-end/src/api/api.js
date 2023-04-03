import * as axios from 'axios';

const instance = axios.create({baseURL: "http://codebreakers.site/VSUscheduleAPI/index.php"})
const lastcheck = axios.create({baseURL: "http://codebreakers.site/VSUschedule/"})

export const api = {
    schedule: {
        getSchedule(group_id){
            return instance.get('?group_id='+group_id).then(response => response.data)
        },
        getLastCheck(){
            return lastcheck.get('test.json').then(response => response.data)
        }
    }
}
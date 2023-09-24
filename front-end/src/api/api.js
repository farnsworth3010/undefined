import * as axios from 'axios';

const instance = axios.create({baseURL: "http://79.133.181.113:8585/api.php"})
const lastcheck = axios.create({baseURL: "http://79.133.181.113:8585/"})

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
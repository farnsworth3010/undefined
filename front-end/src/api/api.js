import * as axios from 'axios';

const instance = axios.create({baseURL: "http://192.168.0.107/test/index.php/"})

export const api = {
    schedule: {
        getSchedule(group_id){
            return instance.get('?group_id='+group_id).then(response => response.data)
        }
    }
}
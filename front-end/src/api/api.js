import * as axios from 'axios';

const instance = axios.create({
    baseURL: "http://192.168.0.107/test/index.php/"
})

export const api = {
    schedule: {
        getSchedule(){
            return instance.get('schedule').then(response => response.data)
        }
    }
}
import { api } from "../api/api";
// import store from "./store";

const SET_SCHEDULE = "SET_SCHEDULE";
const SET_GROUP = "SET_GROUP";
const IS_FETCHING = "IS_FETCHING";
const RESET_GROUP = "RESET_GROUP"
let group_id = undefined

if(localStorage.getItem("group_id")){
    group_id = parseInt(localStorage.getItem("group_id"))
}
else{
    group_id = undefined
}
let group_names = ["22ИСИТ1д", "22МИ1д", "22ПИ_ВЕБ1д", "22ПИ_ПОКС1д", "22ПМ1д", "22ПОИТ1д", "22УИР1д", "22ФИЗ1д"];

const initialState = {
    schedule: [],
    scheduleLoaded: false,
    group_id: group_id,
    isFetching: true,
    group_name: group_names[group_id]
}

const scheduleReducer = (state=initialState, action) => {
    switch(action.type){
        case IS_FETCHING:
            return{
                ...state,
                isFetching: action.isFetching
            }
        case RESET_GROUP:
            localStorage.clear()
            return{
                ...state,
                group_id: undefined
            }
        case SET_SCHEDULE:
            let schedule = action.data
            return{
                ...state,
                schedule: schedule,
                scheduleLoaded: true,
                isFetching: false,
                group_name: group_names[action.group_id]
            }
        case SET_GROUP:
            return{
                ...state,
                group_id: action.group_id,
                group_name: group_names[action.group_id]
            }
        default: 
            return state;
    }
}
const setSchedule = (data, group_id)=> ({type: SET_SCHEDULE, data: data, group_id: group_id})

export const getSchedule = (group_id) => async (dispatch) => {
    dispatch(isFetching(true))
    // let response = await api.schedule.getSchedule(group_id);
    let response
    switch(parseInt(group_id)){
        case 0:
response=[
    {
        "id": "1",
        "lesson_number": "1",
        "audience": "",
        "group_id": "0",
        "day_number": "1",
        "subject": "Физическая культура (пз)",
        "subgroup_id": null,
        "teacher": "",
        "group_name": "22ИСИТ1д"
    },
    {
        "id": "2",
        "lesson_number": "2",
        "audience": "ауд. 321",
        "group_id": "0",
        "day_number": "1",
        "subject": "Объектно-ориентированное проектирование и программирование (лаб)",
        "subgroup_id": "1",
        "teacher": "Столяренко А.Ю. (пр.)",
        "group_name": "22ИСИТ1д"
    },
    {
        "id": "3",
        "lesson_number": "2",
        "audience": "ауд. 219",
        "group_id": "0",
        "day_number": "1",
        "subject": "Языки и технологии программирования (лаб)",
        "subgroup_id": "2",
        "teacher": "Степанов В.А. (пр.)",
        "group_name": "22ИСИТ1д"
    },
    {
        "id": "4",
        "lesson_number": "3",
        "audience": "ауд. 212",
        "group_id": "0",
        "day_number": "1",
        "subject": "Управление научно-исследовательской деятельностью (лк)(фак-в)",
        "subgroup_id": null,
        "teacher": "Богатырёва В.В. (проф.)",
        "group_name": "22ИСИТ1д"
    },
    {
        "id": "5",
        "lesson_number": "4",
        "audience": "ауд. 306",
        "group_id": "0",
        "day_number": "1",
        "subject": "Основы алгоритмизации и программирования (лаб)",
        "subgroup_id": "1",
        "teacher": "Столяренко А.Ю. (пр.)",
        "group_name": "22ИСИТ1д"
    },
    {
        "id": "6",
        "lesson_number": "4",
        "audience": "",
        "group_id": "0",
        "day_number": "1",
        "subject": "",
        "subgroup_id": "2",
        "teacher": "",
        "group_name": "22ИСИТ1д"
    },
    {
        "id": "7",
        "lesson_number": "5",
        "audience": "ауд. 517",
        "group_id": "0",
        "day_number": "1",
        "subject": "Иностранный язык (пз)(фак-в)",
        "subgroup_id": null,
        "teacher": "Гончарова С.А. (пр.)",
        "group_name": "22ИСИТ1д"
    },
    {
        "id": "8",
        "lesson_number": "2",
        "audience": "ауд. 213",
        "group_id": "0",
        "day_number": "2",
        "subject": "Физика (лк)",
        "subgroup_id": null,
        "teacher": "Пышненко О.В. (ст.пр.)",
        "group_name": "22ИСИТ1д"
    },
    {
        "id": "9",
        "lesson_number": "3",
        "audience": "ауд. 534",
        "group_id": "0",
        "day_number": "2",
        "subject": "Математический анализ (лк)",
        "subgroup_id": null,
        "teacher": "Александрович Т.А. (ст.пр.)",
        "group_name": "22ИСИТ1д"
    },
    {
        "id": "10",
        "lesson_number": "4",
        "audience": "ауд. 113",
        "group_id": "0",
        "day_number": "2",
        "subject": "Объектно-ориентированное проектирование и программирование (лк)",
        "subgroup_id": null,
        "teacher": "Корчевская Е.А. (доц.)",
        "group_name": "22ИСИТ1д"
    },
    {
        "id": "11",
        "lesson_number": "5",
        "audience": "ауд. 333",
        "group_id": "0",
        "day_number": "2",
        "subject": "Языки и технологии программирования (лаб)",
        "subgroup_id": "1",
        "teacher": "Петрова Т.К. (ст.пр.)",
        "group_name": "22ИСИТ1д"
    },
    {
        "id": "12",
        "lesson_number": "5",
        "audience": "",
        "group_id": "0",
        "day_number": "2",
        "subject": "",
        "subgroup_id": "2",
        "teacher": "",
        "group_name": "22ИСИТ1д"
    },
    {
        "id": "13",
        "lesson_number": "2",
        "audience": "ауд. 526",
        "group_id": "0",
        "day_number": "3",
        "subject": "Дискретная математика (лк)",
        "subgroup_id": null,
        "teacher": "Караулова Т.Б. (ст.пр.)",
        "group_name": "22ИСИТ1д"
    },
    {
        "id": "14",
        "lesson_number": "3",
        "audience": "ауд. 534",
        "group_id": "0",
        "day_number": "3",
        "subject": "Математический анализ (лк)",
        "subgroup_id": null,
        "teacher": "Александрович Т.А. (ст.пр.)",
        "group_name": "22ИСИТ1д"
    },
    {
        "id": "15",
        "lesson_number": "4",
        "audience": "ауд. 119",
        "group_id": "0",
        "day_number": "3",
        "subject": "Белорусский язык (профессиональная лексика) (пз)",
        "subgroup_id": null,
        "teacher": "Дедова Е.С. (доц.)",
        "group_name": "22ИСИТ1д"
    },
    {
        "id": "16",
        "lesson_number": "5",
        "audience": "",
        "group_id": "0",
        "day_number": "3",
        "subject": "Физическая культура (пз)",
        "subgroup_id": null,
        "teacher": "",
        "group_name": "22ИСИТ1д"
    },
    {
        "id": "17",
        "lesson_number": "2",
        "audience": "ауд. 141",
        "group_id": "0",
        "day_number": "4",
        "subject": "Основы алгоритмизации и программирования (лк)",
        "subgroup_id": null,
        "teacher": "Корчевская Е.А. (доц.)",
        "group_name": "22ИСИТ1д"
    },
    {
        "id": "18",
        "lesson_number": "3",
        "audience": "ауд. 534",
        "group_id": "0",
        "day_number": "4",
        "subject": "Математический анализ (пз)",
        "subgroup_id": null,
        "teacher": "Александрович Т.А. (ст.пр.)",
        "group_name": "22ИСИТ1д"
    },
    {
        "id": "19",
        "lesson_number": "4",
        "audience": "ауд. 141б",
        "group_id": "0",
        "day_number": "4",
        "subject": "Физика (лаб)",
        "subgroup_id": "1",
        "teacher": "Пышненко О.В. (ст.пр.)",
        "group_name": "22ИСИТ1д"
    },
    {
        "id": "20",
        "lesson_number": "4",
        "audience": "ауд. 309",
        "group_id": "0",
        "day_number": "4",
        "subject": "Объектно-ориентированное проектирование и программирование (лаб)",
        "subgroup_id": "2",
        "teacher": "Жук Т.Д. (пр.)",
        "group_name": "22ИСИТ1д"
    },
    {
        "id": "21",
        "lesson_number": "5",
        "audience": "ауд. 119",
        "group_id": "0",
        "day_number": "4",
        "subject": "Дискретная математика (пз)",
        "subgroup_id": null,
        "teacher": "Караулова Т.Б. (ст.пр.)",
        "group_name": "22ИСИТ1д"
    },
    {
        "id": "22",
        "lesson_number": "6",
        "audience": "ауд. 517",
        "group_id": "0",
        "day_number": "4",
        "subject": "Иностранный язык (пз)(фак-в)",
        "subgroup_id": null,
        "teacher": "Гончарова С.А. (пр.)",
        "group_name": "22ИСИТ1д"
    },
    {
        "id": "23",
        "lesson_number": "2",
        "audience": "ауд. 301",
        "group_id": "0",
        "day_number": "5",
        "subject": "Физика (лаб)",
        "subgroup_id": "1",
        "teacher": "Пышненко О.В. (ст.пр.)",
        "group_name": "22ИСИТ1д"
    },
    {
        "id": "24",
        "lesson_number": "2",
        "audience": "ауд. 219",
        "group_id": "0",
        "day_number": "5",
        "subject": "Основы алгоритмизации и программирования (лаб)",
        "subgroup_id": "2",
        "teacher": "Иванова Л.В. (пр.)",
        "group_name": "22ИСИТ1д"
    },
    {
        "id": "25",
        "lesson_number": "3",
        "audience": "ауд. 319",
        "group_id": "0",
        "day_number": "5",
        "subject": "Иностранный язык (пз)(фак-в)",
        "subgroup_id": "1",
        "teacher": "Балло Ю.А. (ст.пр.)",
        "group_name": "22ИСИТ1д"
    },
    {
        "id": "26",
        "lesson_number": "3",
        "audience": "ауд. 517",
        "group_id": "0",
        "day_number": "5",
        "subject": "Иностранный язык (пз)(фак-в)",
        "subgroup_id": "2",
        "teacher": "Шкатуло Н.М. (ст.пр.)",
        "group_name": "22ИСИТ1д"
    },
    {
        "id": "27",
        "lesson_number": "4",
        "audience": "ауд. 319",
        "group_id": "0",
        "day_number": "5",
        "subject": "Иностранный язык (пз)(фак-в)",
        "subgroup_id": "1",
        "teacher": "Балло Ю.А. (ст.пр.)",
        "group_name": "22ИСИТ1д"
    },
    {
        "id": "28",
        "lesson_number": "4",
        "audience": "ауд. 517",
        "group_id": "0",
        "day_number": "5",
        "subject": "Иностранный язык (пз)(фак-в)",
        "subgroup_id": "2",
        "teacher": "Шкатуло Н.М. (ст.пр.)",
        "group_name": "22ИСИТ1д"
    },
    {
        "id": "29",
        "lesson_number": "5",
        "audience": "ауд. 427",
        "group_id": "0",
        "day_number": "5",
        "subject": "Объектно-ориентированное проектирование и программирование (лк)",
        "subgroup_id": null,
        "teacher": "Корчевская Е.А. (доц.)",
        "group_name": "22ИСИТ1д"
    }
]
break;
case 1:
response=[
    {
        "id": "30",
        "lesson_number": "1",
        "audience": "",
        "group_id": "1",
        "day_number": "1",
        "subject": "Физическая культура (пз)",
        "subgroup_id": null,
        "teacher": "",
        "group_name": "22МИ1д"
    },
    {
        "id": "31",
        "lesson_number": "2",
        "audience": "ауд. 113",
        "group_id": "1",
        "day_number": "1",
        "subject": "Дифференциальное исчисление (лк)",
        "subgroup_id": null,
        "teacher": "Подоксенов М.Н. (доц.)",
        "group_name": "22МИ1д"
    },
    {
        "id": "32",
        "lesson_number": "3",
        "audience": "ауд. 425",
        "group_id": "1",
        "day_number": "1",
        "subject": "Методы алгоритмизации (лк)",
        "subgroup_id": null,
        "teacher": "Шпаков С.А. (ст.пр.)",
        "group_name": "22МИ1д"
    },
    {
        "id": "33",
        "lesson_number": "4",
        "audience": "ауд. 509a",
        "group_id": "1",
        "day_number": "1",
        "subject": "Элементарная математика (лк)",
        "subgroup_id": null,
        "teacher": "Устименко В.В. (доц.)",
        "group_name": "22МИ1д"
    },
    {
        "id": "34",
        "lesson_number": "5",
        "audience": "",
        "group_id": "1",
        "day_number": "1",
        "subject": "",
        "subgroup_id": "1",
        "teacher": "",
        "group_name": "22МИ1д"
    },
    {
        "id": "35",
        "lesson_number": "5",
        "audience": "ауд. 517",
        "group_id": "1",
        "day_number": "1",
        "subject": "Иностранный язык (пз)(фак-в)",
        "subgroup_id": "2",
        "teacher": "Гончарова С.А. (пр.)",
        "group_name": "22МИ1д"
    },
    {
        "id": "36",
        "lesson_number": "2",
        "audience": "ауд. 212",
        "group_id": "1",
        "day_number": "2",
        "subject": "Философия (лк)",
        "subgroup_id": null,
        "teacher": "Рудковский Э.И. (доц.)",
        "group_name": "22МИ1д"
    },
    {
        "id": "37",
        "lesson_number": "3",
        "audience": "ауд. конф. зал",
        "group_id": "1",
        "day_number": "2",
        "subject": "Управление научно-исследовательской деятельностью (лк)(фак-в)",
        "subgroup_id": null,
        "teacher": "Богатырёва В.В. (проф.)",
        "group_name": "22МИ1д"
    },
    {
        "id": "38",
        "lesson_number": "4",
        "audience": "ауд. 412",
        "group_id": "1",
        "day_number": "2",
        "subject": "Теория множеств и логика высказываний (пз)",
        "subgroup_id": null,
        "teacher": "Караулова Т.Б. (ст.пр.)",
        "group_name": "22МИ1д"
    },
    {
        "id": "39",
        "lesson_number": "5",
        "audience": "ауд. 317",
        "group_id": "1",
        "day_number": "2",
        "subject": "Алгебраические структуры и теория чисел (пз)",
        "subgroup_id": null,
        "teacher": "Воробьев Н.Т. (проф.)",
        "group_name": "22МИ1д"
    },
    {
        "id": "40",
        "lesson_number": "2",
        "audience": "ауд. 534",
        "group_id": "1",
        "day_number": "3",
        "subject": "Дифференциальное исчисление (пз)",
        "subgroup_id": null,
        "teacher": "Подоксенов М.Н. (доц.)",
        "group_name": "22МИ1д"
    },
    {
        "id": "41",
        "lesson_number": "3",
        "audience": "ауд. 526",
        "group_id": "1",
        "day_number": "3",
        "subject": "Философия (пз)",
        "subgroup_id": null,
        "teacher": "Боярщонок Н.М. (пр.)",
        "group_name": "22МИ1д"
    },
    {
        "id": "42",
        "lesson_number": "4",
        "audience": "ауд. 526",
        "group_id": "1",
        "day_number": "3",
        "subject": "Алгебраические структуры и теория чисел (лк)",
        "subgroup_id": null,
        "teacher": "Воробьев Н.Т. (проф.)",
        "group_name": "22МИ1д"
    },
    {
        "id": "43",
        "lesson_number": "5",
        "audience": "",
        "group_id": "1",
        "day_number": "3",
        "subject": "Физическая культура (пз)",
        "subgroup_id": null,
        "teacher": "",
        "group_name": "22МИ1д"
    },
    {
        "id": "44",
        "lesson_number": "6",
        "audience": "ауд. 303",
        "group_id": "1",
        "day_number": "3",
        "subject": "Методы алгоритмизации (лаб)",
        "subgroup_id": "1",
        "teacher": "Шпаков С.А. (ст.пр.)",
        "group_name": "22МИ1д"
    },
    {
        "id": "45",
        "lesson_number": "6",
        "audience": "",
        "group_id": "1",
        "day_number": "3",
        "subject": "",
        "subgroup_id": "2",
        "teacher": "",
        "group_name": "22МИ1д"
    },
    {
        "id": "46",
        "lesson_number": "2",
        "audience": "ауд. 526",
        "group_id": "1",
        "day_number": "4",
        "subject": "Аналитическая геометрия (лк)",
        "subgroup_id": null,
        "teacher": "Подоксенов М.Н. (доц.)",
        "group_name": "22МИ1д"
    },
    {
        "id": "47",
        "lesson_number": "3",
        "audience": "ауд. 219",
        "group_id": "1",
        "day_number": "4",
        "subject": "Иностранный язык (профессиональный) (пз)",
        "subgroup_id": "1",
        "teacher": "Кажекина Л.В. (ст.пр.)",
        "group_name": "22МИ1д"
    },
    {
        "id": "48",
        "lesson_number": "3",
        "audience": "ауд. 517",
        "group_id": "1",
        "day_number": "4",
        "subject": "Иностранный язык (профессиональный) (пз)",
        "subgroup_id": "2",
        "teacher": "Шкатуло Н.М. (ст.пр.)",
        "group_name": "22МИ1д"
    },
    {
        "id": "49",
        "lesson_number": "4",
        "audience": "ауд. 219",
        "group_id": "1",
        "day_number": "4",
        "subject": "Иностранный язык (профессиональный) (пз)",
        "subgroup_id": "1",
        "teacher": "Кажекина Л.В. (ст.пр.)",
        "group_name": "22МИ1д"
    },
    {
        "id": "50",
        "lesson_number": "4",
        "audience": "ауд. 517",
        "group_id": "1",
        "day_number": "4",
        "subject": "Иностранный язык (профессиональный) (пз)",
        "subgroup_id": "2",
        "teacher": "Шкатуло Н.М. (ст.пр.)",
        "group_name": "22МИ1д"
    },
    {
        "id": "51",
        "lesson_number": "5",
        "audience": "",
        "group_id": "1",
        "day_number": "4",
        "subject": "",
        "subgroup_id": "1",
        "teacher": "",
        "group_name": "22МИ1д"
    },
    {
        "id": "52",
        "lesson_number": "5",
        "audience": "ауд. 218",
        "group_id": "1",
        "day_number": "4",
        "subject": "Методы алгоритмизации (лаб)",
        "subgroup_id": "2",
        "teacher": "Шпаков С.А. (ст.пр.)",
        "group_name": "22МИ1д"
    },
    {
        "id": "53",
        "lesson_number": "6",
        "audience": "",
        "group_id": "1",
        "day_number": "4",
        "subject": "",
        "subgroup_id": "1",
        "teacher": "",
        "group_name": "22МИ1д"
    },
    {
        "id": "54",
        "lesson_number": "6",
        "audience": "ауд. 517",
        "group_id": "1",
        "day_number": "4",
        "subject": "Иностранный язык (пз)(фак-в)",
        "subgroup_id": "2",
        "teacher": "Гончарова С.А. (пр.)",
        "group_name": "22МИ1д"
    },
    {
        "id": "55",
        "lesson_number": "2",
        "audience": "ауд. 141",
        "group_id": "1",
        "day_number": "5",
        "subject": "Компьютерная графика и мультимедиа (лк)",
        "subgroup_id": null,
        "teacher": "Булгакова Н.В. (ст.пр.)",
        "group_name": "22МИ1д"
    },
    {
        "id": "56",
        "lesson_number": "3",
        "audience": "ауд. 134",
        "group_id": "1",
        "day_number": "5",
        "subject": "Теория множеств и логика высказываний (лк)",
        "subgroup_id": null,
        "teacher": "Караулова Т.Б. (ст.пр.)",
        "group_name": "22МИ1д"
    },
    {
        "id": "57",
        "lesson_number": "4",
        "audience": "ауд. 534",
        "group_id": "1",
        "day_number": "5",
        "subject": "Социальная психология (лк)",
        "subgroup_id": null,
        "teacher": "Косаревская Т.Е. (доц.)",
        "group_name": "22МИ1д"
    }
]
break;
case 2:
response=[
    {
        "id": "58",
        "lesson_number": "1",
        "audience": "",
        "group_id": "2",
        "day_number": "1",
        "subject": "Физическая культура (пз)",
        "subgroup_id": null,
        "teacher": "",
        "group_name": "22ПИ_ВЕБ1д"
    },
    {
        "id": "59",
        "lesson_number": "2",
        "audience": "ауд. 526",
        "group_id": "2",
        "day_number": "1",
        "subject": "Математический анализ (пз)",
        "subgroup_id": null,
        "teacher": "Александрович Т.А. (ст.пр.)",
        "group_name": "22ПИ_ВЕБ1д"
    },
    {
        "id": "60",
        "lesson_number": "3",
        "audience": "ауд. 219",
        "group_id": "2",
        "day_number": "1",
        "subject": "Иностранный язык (пз)",
        "subgroup_id": "1",
        "teacher": "Кажекина Л.В. (ст.пр.)",
        "group_name": "22ПИ_ВЕБ1д"
    },
    {
        "id": "61",
        "lesson_number": "3",
        "audience": "ауд. 326",
        "group_id": "2",
        "day_number": "1",
        "subject": "Иностранный язык (пз)",
        "subgroup_id": "2",
        "teacher": "Балло Ю.А. (ст.пр.)",
        "group_name": "22ПИ_ВЕБ1д"
    },
    {
        "id": "62",
        "lesson_number": "4",
        "audience": "ауд. 219",
        "group_id": "2",
        "day_number": "1",
        "subject": "Иностранный язык (пз)",
        "subgroup_id": "1",
        "teacher": "Кажекина Л.В. (ст.пр.)",
        "group_name": "22ПИ_ВЕБ1д"
    },
    {
        "id": "63",
        "lesson_number": "4",
        "audience": "ауд. 326",
        "group_id": "2",
        "day_number": "1",
        "subject": "Иностранный язык (пз)",
        "subgroup_id": "2",
        "teacher": "Балло Ю.А. (ст.пр.)",
        "group_name": "22ПИ_ВЕБ1д"
    },
    {
        "id": "64",
        "lesson_number": "5",
        "audience": "ауд. 517",
        "group_id": "2",
        "day_number": "1",
        "subject": "Иностранный язык (пз)(фак-в)",
        "subgroup_id": null,
        "teacher": "Гончарова С.А. (пр.)",
        "group_name": "22ПИ_ВЕБ1д"
    },
    {
        "id": "65",
        "lesson_number": "2",
        "audience": "ауд. 212",
        "group_id": "2",
        "day_number": "2",
        "subject": "Философия (лк)",
        "subgroup_id": null,
        "teacher": "Рудковский Э.И. (доц.)",
        "group_name": "22ПИ_ВЕБ1д"
    },
    {
        "id": "66",
        "lesson_number": "3",
        "audience": "ауд. конф. зал",
        "group_id": "2",
        "day_number": "2",
        "subject": "Управление научно-исследовательской деятельностью (лк)(фак-в)",
        "subgroup_id": null,
        "teacher": "Богатырёва В.В. (проф.)",
        "group_name": "22ПИ_ВЕБ1д"
    },
    {
        "id": "67",
        "lesson_number": "4",
        "audience": "ауд. 526",
        "group_id": "2",
        "day_number": "2",
        "subject": "Алгебра и теория чисел (лк)",
        "subgroup_id": null,
        "teacher": "Мехович А.П. (доц.)",
        "group_name": "22ПИ_ВЕБ1д"
    },
    {
        "id": "68",
        "lesson_number": "5",
        "audience": "ауд. 321",
        "group_id": "2",
        "day_number": "2",
        "subject": "ВП (практика)",
        "subgroup_id": "1",
        "teacher": "Мехович А.П. (доц.)",
        "group_name": "22ПИ_ВЕБ1д"
    },
    {
        "id": "69",
        "lesson_number": "5",
        "audience": "ауд. 309",
        "group_id": "2",
        "day_number": "2",
        "subject": "ВП (практика)",
        "subgroup_id": "2",
        "teacher": "Александрович Т.А. (ст.пр.)",
        "group_name": "22ПИ_ВЕБ1д"
    },
    {
        "id": "70",
        "lesson_number": "2",
        "audience": "ауд. 141",
        "group_id": "2",
        "day_number": "3",
        "subject": "Основы и методологии программирования (лк)",
        "subgroup_id": null,
        "teacher": "Корчевская Е.А. (доц.)",
        "group_name": "22ПИ_ВЕБ1д"
    },
    {
        "id": "71",
        "lesson_number": "3",
        "audience": "ауд. 307",
        "group_id": "2",
        "day_number": "3",
        "subject": "Основы и методологии программирования (лаб)",
        "subgroup_id": "1",
        "teacher": "Исаченко Ю.В. (пр.)",
        "group_name": "22ПИ_ВЕБ1д"
    },
    {
        "id": "72",
        "lesson_number": "3",
        "audience": "ауд. 218",
        "group_id": "2",
        "day_number": "3",
        "subject": "Основы и методологии программирования (лаб)",
        "subgroup_id": "2",
        "teacher": "Столяренко А.Ю. (пр.)",
        "group_name": "22ПИ_ВЕБ1д"
    },
    {
        "id": "73",
        "lesson_number": "4",
        "audience": "ауд. 309",
        "group_id": "2",
        "day_number": "3",
        "subject": "Основы тестирования программного обеспечения (лк)",
        "subgroup_id": null,
        "teacher": "Шедько В.В. (ст.пр.)",
        "group_name": "22ПИ_ВЕБ1д"
    },
    {
        "id": "74",
        "lesson_number": "5",
        "audience": "",
        "group_id": "2",
        "day_number": "3",
        "subject": "Физическая культура (пз)",
        "subgroup_id": null,
        "teacher": "",
        "group_name": "22ПИ_ВЕБ1д"
    },
    {
        "id": "75",
        "lesson_number": "6",
        "audience": "ауд. 307",
        "group_id": "2",
        "day_number": "3",
        "subject": "Основы и методологии программирования (лаб)",
        "subgroup_id": "1",
        "teacher": "Исаченко Ю.В. (пр.)",
        "group_name": "22ПИ_ВЕБ1д"
    },
    {
        "id": "76",
        "lesson_number": "6",
        "audience": "ауд. 306",
        "group_id": "2",
        "day_number": "3",
        "subject": "Алгоритмы и структуры данных (лаб)",
        "subgroup_id": "2",
        "teacher": "Жук Т.Д. (пр.)",
        "group_name": "22ПИ_ВЕБ1д"
    },
    {
        "id": "77",
        "lesson_number": "2",
        "audience": "ауд. 534",
        "group_id": "2",
        "day_number": "4",
        "subject": "Математический анализ (лк)",
        "subgroup_id": null,
        "teacher": "Кавитова Т.В. (ст.пр.)",
        "group_name": "22ПИ_ВЕБ1д"
    },
    {
        "id": "78",
        "lesson_number": "3",
        "audience": "ауд. 142",
        "group_id": "2",
        "day_number": "4",
        "subject": "Философия (пз)",
        "subgroup_id": null,
        "teacher": "Боярщонок Н.М. (пр.)",
        "group_name": "22ПИ_ВЕБ1д"
    },
    {
        "id": "79",
        "lesson_number": "4",
        "audience": "ауд. 526",
        "group_id": "2",
        "day_number": "4",
        "subject": "Математический анализ (лк)",
        "subgroup_id": null,
        "teacher": "Кавитова Т.В. (ст.пр.)",
        "group_name": "22ПИ_ВЕБ1д"
    },
    {
        "id": "80",
        "lesson_number": "5",
        "audience": "ауд. 521",
        "group_id": "2",
        "day_number": "4",
        "subject": "Белорусский язык (профессиональная лексика) (пз)",
        "subgroup_id": null,
        "teacher": "Зайцева Е.А. (ст.пр.)",
        "group_name": "22ПИ_ВЕБ1д"
    },
    {
        "id": "81",
        "lesson_number": "6",
        "audience": "ауд. 517",
        "group_id": "2",
        "day_number": "4",
        "subject": "Иностранный язык (пз)(фак-в)",
        "subgroup_id": null,
        "teacher": "Гончарова С.А. (пр.)",
        "group_name": "22ПИ_ВЕБ1д"
    },
    {
        "id": "82",
        "lesson_number": "1",
        "audience": "",
        "group_id": "2",
        "day_number": "5",
        "subject": "",
        "subgroup_id": "1",
        "teacher": "",
        "group_name": "22ПИ_ВЕБ1д"
    },
    {
        "id": "83",
        "lesson_number": "1",
        "audience": "ауд. 221",
        "group_id": "2",
        "day_number": "5",
        "subject": "Основы и методологии программирования (лаб)",
        "subgroup_id": "2",
        "teacher": "Столяренко А.Ю. (пр.)",
        "group_name": "22ПИ_ВЕБ1д"
    },
    {
        "id": "84",
        "lesson_number": "2",
        "audience": "ауд. 530",
        "group_id": "2",
        "day_number": "5",
        "subject": "Алгебра и теория чисел (пз)",
        "subgroup_id": null,
        "teacher": "Мехович А.П. (доц.)",
        "group_name": "22ПИ_ВЕБ1д"
    },
    {
        "id": "85",
        "lesson_number": "3",
        "audience": "ауд. 521",
        "group_id": "2",
        "day_number": "5",
        "subject": "Основы и методологии программирования (лк)",
        "subgroup_id": null,
        "teacher": "Корчевская Е.А. (доц.)",
        "group_name": "22ПИ_ВЕБ1д"
    },
    {
        "id": "86",
        "lesson_number": "4",
        "audience": "ауд. 427",
        "group_id": "2",
        "day_number": "5",
        "subject": "Алгоритмы и структуры данных (лк)",
        "subgroup_id": null,
        "teacher": "Жук Т.Д. (пр.)",
        "group_name": "22ПИ_ВЕБ1д"
    },
    {
        "id": "87",
        "lesson_number": "5",
        "audience": "ауд. 306",
        "group_id": "2",
        "day_number": "5",
        "subject": "Алгоритмы и структуры данных (лаб)",
        "subgroup_id": "1",
        "teacher": "Столяренко А.Ю. (пр.)",
        "group_name": "22ПИ_ВЕБ1д"
    },
    {
        "id": "88",
        "lesson_number": "5",
        "audience": "",
        "group_id": "2",
        "day_number": "5",
        "subject": "",
        "subgroup_id": "2",
        "teacher": "",
        "group_name": "22ПИ_ВЕБ1д"
    }
]
break;
case 3:
response=[
    {
        "id": "89",
        "lesson_number": "1",
        "audience": "",
        "group_id": "3",
        "day_number": "1",
        "subject": "Физическая культура (пз)",
        "subgroup_id": null,
        "teacher": "",
        "group_name": "22ПИ_ПОКС1д"
    },
    {
        "id": "90",
        "lesson_number": "2",
        "audience": "ауд. 612",
        "group_id": "3",
        "day_number": "1",
        "subject": "Белорусский язык (профессиональная лексика) (пз)",
        "subgroup_id": null,
        "teacher": "Дедова Е.С. (доц.)",
        "group_name": "22ПИ_ПОКС1д"
    },
    {
        "id": "91",
        "lesson_number": "3",
        "audience": "ауд. 212",
        "group_id": "3",
        "day_number": "1",
        "subject": "Управление научно-исследовательской деятельностью (лк)(фак-в)",
        "subgroup_id": null,
        "teacher": "Богатырёва В.В. (проф.)",
        "group_name": "22ПИ_ПОКС1д"
    },
    {
        "id": "92",
        "lesson_number": "4",
        "audience": "ауд. 326",
        "group_id": "3",
        "day_number": "1",
        "subject": "Иностранный язык (пз)",
        "subgroup_id": "1",
        "teacher": "Балло Ю.А. (ст.пр.)",
        "group_name": "22ПИ_ПОКС1д"
    },
    {
        "id": "93",
        "lesson_number": "4",
        "audience": "ауд. 302",
        "group_id": "3",
        "day_number": "1",
        "subject": "Иностранный язык (пз)",
        "subgroup_id": "2",
        "teacher": "Шкатуло Н.М. (ст.пр.)",
        "group_name": "22ПИ_ПОКС1д"
    },
    {
        "id": "94",
        "lesson_number": "5",
        "audience": "",
        "group_id": "3",
        "day_number": "1",
        "subject": "",
        "subgroup_id": "1",
        "teacher": "",
        "group_name": "22ПИ_ПОКС1д"
    },
    {
        "id": "95",
        "lesson_number": "5",
        "audience": "ауд. 517",
        "group_id": "3",
        "day_number": "1",
        "subject": "Иностранный язык (пз)(фак-в)",
        "subgroup_id": "2",
        "teacher": "Гончарова С.А. (пр.)",
        "group_name": "22ПИ_ПОКС1д"
    },
    {
        "id": "96",
        "lesson_number": "2",
        "audience": "ауд. 212",
        "group_id": "3",
        "day_number": "2",
        "subject": "Философия (лк)",
        "subgroup_id": null,
        "teacher": "Рудковский Э.И. (доц.)",
        "group_name": "22ПИ_ПОКС1д"
    },
    {
        "id": "97",
        "lesson_number": "3",
        "audience": "ауд. 221",
        "group_id": "3",
        "day_number": "2",
        "subject": "Разработка кросс-платформенных приложений (лаб)",
        "subgroup_id": "1",
        "teacher": "Исаченко Ю.В. (пр.)",
        "group_name": "22ПИ_ПОКС1д"
    },
    {
        "id": "98",
        "lesson_number": "3",
        "audience": "ауд. 308",
        "group_id": "3",
        "day_number": "2",
        "subject": "Разработка кросс-платформенных приложений (лаб)",
        "subgroup_id": "2",
        "teacher": "Столяренко А.Ю. (пр.)",
        "group_name": "22ПИ_ПОКС1д"
    },
    {
        "id": "99",
        "lesson_number": "4",
        "audience": "ауд. 526",
        "group_id": "3",
        "day_number": "2",
        "subject": "Алгебра и теория чисел (лк)",
        "subgroup_id": null,
        "teacher": "Мехович А.П. (доц.)",
        "group_name": "22ПИ_ПОКС1д"
    },
    {
        "id": "100",
        "lesson_number": "5",
        "audience": "ауд. 313",
        "group_id": "3",
        "day_number": "2",
        "subject": "Разработка кросс-платформенных приложений (лаб)",
        "subgroup_id": "1",
        "teacher": "Исаченко Ю.В. (пр.)",
        "group_name": "22ПИ_ПОКС1д"
    },
    {
        "id": "101",
        "lesson_number": "5",
        "audience": "ауд. 219",
        "group_id": "3",
        "day_number": "2",
        "subject": "Разработка кросс-платформенных приложений (лаб)",
        "subgroup_id": "2",
        "teacher": "Столяренко А.Ю. (пр.)",
        "group_name": "22ПИ_ПОКС1д"
    },
    {
        "id": "102",
        "lesson_number": "1",
        "audience": "ауд. 425",
        "group_id": "3",
        "day_number": "3",
        "subject": "Разработка кросс-платформенных приложений (лк)",
        "subgroup_id": null,
        "teacher": "Семёнов М.Г. (доц.)",
        "group_name": "22ПИ_ПОКС1д"
    },
    {
        "id": "103",
        "lesson_number": "2",
        "audience": "ауд. 425",
        "group_id": "3",
        "day_number": "3",
        "subject": "Философия (пз)",
        "subgroup_id": null,
        "teacher": "Боярщонок Н.М. (пр.)",
        "group_name": "22ПИ_ПОКС1д"
    },
    {
        "id": "104",
        "lesson_number": "3",
        "audience": "ауд. 530",
        "group_id": "3",
        "day_number": "3",
        "subject": "Алгебра и теория чисел (лк)",
        "subgroup_id": null,
        "teacher": "Мехович А.П. (доц.)",
        "group_name": "22ПИ_ПОКС1д"
    },
    {
        "id": "105",
        "lesson_number": "4",
        "audience": "ауд. 530",
        "group_id": "3",
        "day_number": "3",
        "subject": "Дискретная математика и математическая логика (пз)",
        "subgroup_id": null,
        "teacher": "Караулова Т.Б. (ст.пр.)",
        "group_name": "22ПИ_ПОКС1д"
    },
    {
        "id": "106",
        "lesson_number": "5",
        "audience": "",
        "group_id": "3",
        "day_number": "3",
        "subject": "Физическая культура (пз)",
        "subgroup_id": null,
        "teacher": "",
        "group_name": "22ПИ_ПОКС1д"
    },
    {
        "id": "107",
        "lesson_number": "6",
        "audience": "ауд. 308",
        "group_id": "3",
        "day_number": "3",
        "subject": "ВП (практика)",
        "subgroup_id": "1",
        "teacher": "Столяренко А.Ю. (пр.)",
        "group_name": "22ПИ_ПОКС1д"
    },
    {
        "id": "108",
        "lesson_number": "6",
        "audience": "ауд. 309",
        "group_id": "3",
        "day_number": "3",
        "subject": "ВП (практика)",
        "subgroup_id": "2",
        "teacher": "Степанов В.А. (пр.)",
        "group_name": "22ПИ_ПОКС1д"
    },
    {
        "id": "109",
        "lesson_number": "2",
        "audience": "ауд. 534",
        "group_id": "3",
        "day_number": "4",
        "subject": "Математический анализ (лк)",
        "subgroup_id": null,
        "teacher": "Кавитова Т.В. (ст.пр.)",
        "group_name": "22ПИ_ПОКС1д"
    },
    {
        "id": "110",
        "lesson_number": "3",
        "audience": "ауд. 530",
        "group_id": "3",
        "day_number": "4",
        "subject": "Алгебра и теория чисел (пз)",
        "subgroup_id": null,
        "teacher": "Мехович А.П. (доц.)",
        "group_name": "22ПИ_ПОКС1д"
    },
    {
        "id": "111",
        "lesson_number": "4",
        "audience": "ауд. 526",
        "group_id": "3",
        "day_number": "4",
        "subject": "Математический анализ (лк)",
        "subgroup_id": null,
        "teacher": "Кавитова Т.В. (ст.пр.)",
        "group_name": "22ПИ_ПОКС1д"
    },
    {
        "id": "112",
        "lesson_number": "6",
        "audience": "",
        "group_id": "3",
        "day_number": "4",
        "subject": "",
        "subgroup_id": "1",
        "teacher": "",
        "group_name": "22ПИ_ПОКС1д"
    },
    {
        "id": "113",
        "lesson_number": "6",
        "audience": "ауд. 517",
        "group_id": "3",
        "day_number": "4",
        "subject": "Иностранный язык (пз)(фак-в)",
        "subgroup_id": "2",
        "teacher": "Гончарова С.А. (пр.)",
        "group_name": "22ПИ_ПОКС1д"
    },
    {
        "id": "114",
        "lesson_number": "2",
        "audience": "ауд. 528",
        "group_id": "3",
        "day_number": "5",
        "subject": "Математический анализ (пз)",
        "subgroup_id": null,
        "teacher": "Кавитова Т.В. (ст.пр.)",
        "group_name": "22ПИ_ПОКС1д"
    },
    {
        "id": "115",
        "lesson_number": "3",
        "audience": "ауд. 528",
        "group_id": "3",
        "day_number": "5",
        "subject": "Алгебра и теория чисел (пз)",
        "subgroup_id": null,
        "teacher": "Мехович А.П. (доц.)",
        "group_name": "22ПИ_ПОКС1д"
    },
    {
        "id": "116",
        "lesson_number": "4",
        "audience": "ауд. 531",
        "group_id": "3",
        "day_number": "5",
        "subject": "Математические методы компьютерной графики (лк)",
        "subgroup_id": null,
        "teacher": "Никитин А.И. (доц.)",
        "group_name": "22ПИ_ПОКС1д"
    },
    {
        "id": "117",
        "lesson_number": "5",
        "audience": "ауд. 113",
        "group_id": "3",
        "day_number": "5",
        "subject": "Дискретная математика и математическая логика (лк)",
        "subgroup_id": null,
        "teacher": "Караулова Т.Б. (ст.пр.)",
        "group_name": "22ПИ_ПОКС1д"
    }
]
break;
case 4:
response=[
    {
        "id": "118",
        "lesson_number": "1",
        "audience": "",
        "group_id": "4",
        "day_number": "1",
        "subject": "Физическая культура (пз)",
        "subgroup_id": null,
        "teacher": "",
        "group_name": "22ПМ1д"
    },
    {
        "id": "119",
        "lesson_number": "2",
        "audience": "ауд. 612а",
        "group_id": "4",
        "day_number": "1",
        "subject": "Дифференциальное и интегральное исчисление (лк)",
        "subgroup_id": null,
        "teacher": "Иванова Ж.В. (доц.)",
        "group_name": "22ПМ1д"
    },
    {
        "id": "120",
        "lesson_number": "3",
        "audience": "ауд. 212",
        "group_id": "4",
        "day_number": "1",
        "subject": "Управление научно-исследовательской деятельностью (лк)(фак-в)",
        "subgroup_id": null,
        "teacher": "Богатырёва В.В. (проф.)",
        "group_name": "22ПМ1д"
    },
    {
        "id": "121",
        "lesson_number": "4",
        "audience": "ауд. 528",
        "group_id": "4",
        "day_number": "1",
        "subject": "Белорусский язык (профессиональная лексика) (пз)",
        "subgroup_id": null,
        "teacher": "Радюль О.Ю. (ст.пр.)",
        "group_name": "22ПМ1д"
    },
    {
        "id": "122",
        "lesson_number": "5",
        "audience": "ауд. 517",
        "group_id": "4",
        "day_number": "1",
        "subject": "Иностранный язык (пз)(фак-в)",
        "subgroup_id": "1",
        "teacher": "Гончарова С.А. (пр.)",
        "group_name": "22ПМ1д"
    },
    {
        "id": "123",
        "lesson_number": "5",
        "audience": "ауд. 219",
        "group_id": "4",
        "day_number": "1",
        "subject": "Иностранный язык (пз)(фак-в)",
        "subgroup_id": "2",
        "teacher": "Кажекина Л.В. (ст.пр.)",
        "group_name": "22ПМ1д"
    },
    {
        "id": "124",
        "lesson_number": "2",
        "audience": "ауд. 333",
        "group_id": "4",
        "day_number": "2",
        "subject": "Разработка кросс-платформенных приложений (лаб)",
        "subgroup_id": "1",
        "teacher": "Степанов В.А. (пр.)",
        "group_name": "22ПМ1д"
    },
    {
        "id": "125",
        "lesson_number": "2",
        "audience": "ауд. 308",
        "group_id": "4",
        "day_number": "2",
        "subject": "Разработка кросс-платформенных приложений (лаб)",
        "subgroup_id": "2",
        "teacher": "Столяренко А.Ю. (пр.)",
        "group_name": "22ПМ1д"
    },
    {
        "id": "126",
        "lesson_number": "3",
        "audience": "ауд. 530",
        "group_id": "4",
        "day_number": "2",
        "subject": "Дискретная математика (пз)",
        "subgroup_id": null,
        "teacher": "Караулова Т.Б. (ст.пр.)",
        "group_name": "22ПМ1д"
    },
    {
        "id": "127",
        "lesson_number": "4",
        "audience": "ауд. 534",
        "group_id": "4",
        "day_number": "2",
        "subject": "Дифференциальное и интегральное исчисление (пз)",
        "subgroup_id": null,
        "teacher": "Иванова Ж.В. (доц.)",
        "group_name": "22ПМ1д"
    },
    {
        "id": "128",
        "lesson_number": "5",
        "audience": "ауд. 307",
        "group_id": "4",
        "day_number": "2",
        "subject": "ВП (практика)",
        "subgroup_id": "1",
        "teacher": "Караулова Т.Б. (ст.пр.)",
        "group_name": "22ПМ1д"
    },
    {
        "id": "129",
        "lesson_number": "5",
        "audience": "ауд. 319",
        "group_id": "4",
        "day_number": "2",
        "subject": "ВП (практика)",
        "subgroup_id": "2",
        "teacher": "Ализарчик Л.Л. (доц.)",
        "group_name": "22ПМ1д"
    },
    {
        "id": "130",
        "lesson_number": "1",
        "audience": "ауд. 425",
        "group_id": "4",
        "day_number": "3",
        "subject": "Разработка кросс-платформенных приложений (лк)",
        "subgroup_id": null,
        "teacher": "Семёнов М.Г. (доц.)",
        "group_name": "22ПМ1д"
    },
    {
        "id": "131",
        "lesson_number": "2",
        "audience": "ауд. 528",
        "group_id": "4",
        "day_number": "3",
        "subject": "Линейная алгебра (лк)",
        "subgroup_id": null,
        "teacher": "Александрович Т.А. (ст.пр.)",
        "group_name": "22ПМ1д"
    },
    {
        "id": "132",
        "lesson_number": "3",
        "audience": "ауд. 134",
        "group_id": "4",
        "day_number": "3",
        "subject": "Дискретная математика (лк)",
        "subgroup_id": null,
        "teacher": "Караулова Т.Б. (ст.пр.)",
        "group_name": "22ПМ1д"
    },
    {
        "id": "133",
        "lesson_number": "4",
        "audience": "ауд. 534",
        "group_id": "4",
        "day_number": "3",
        "subject": "Линейная алгебра (пз)",
        "subgroup_id": null,
        "teacher": "Александрович Т.А. (ст.пр.)",
        "group_name": "22ПМ1д"
    },
    {
        "id": "134",
        "lesson_number": "5",
        "audience": "",
        "group_id": "4",
        "day_number": "3",
        "subject": "Физическая культура (пз)",
        "subgroup_id": null,
        "teacher": "",
        "group_name": "22ПМ1д"
    },
    {
        "id": "135",
        "lesson_number": "2",
        "audience": "ауд. 134",
        "group_id": "4",
        "day_number": "4",
        "subject": "Линейная алгебра (пз)",
        "subgroup_id": null,
        "teacher": "Александрович Т.А. (ст.пр.)",
        "group_name": "22ПМ1д"
    },
    {
        "id": "136",
        "lesson_number": "3",
        "audience": "ауд. 528",
        "group_id": "4",
        "day_number": "4",
        "subject": "Дискретная математика (лк)",
        "subgroup_id": null,
        "teacher": "Караулова Т.Б. (ст.пр.)",
        "group_name": "22ПМ1д"
    },
    {
        "id": "137",
        "lesson_number": "4",
        "audience": "ауд. 119",
        "group_id": "4",
        "day_number": "4",
        "subject": "Линейная алгебра (лк)",
        "subgroup_id": null,
        "teacher": "Александрович Т.А. (ст.пр.)",
        "group_name": "22ПМ1д"
    },
    {
        "id": "138",
        "lesson_number": "5",
        "audience": "ауд. 317",
        "group_id": "4",
        "day_number": "4",
        "subject": "Дифференциальное и интегральное исчисление (лк)",
        "subgroup_id": null,
        "teacher": "Иванова Ж.В. (доц.)",
        "group_name": "22ПМ1д"
    },
    {
        "id": "139",
        "lesson_number": "6",
        "audience": "ауд. 517",
        "group_id": "4",
        "day_number": "4",
        "subject": "Иностранный язык (пз)(фак-в)",
        "subgroup_id": "1",
        "teacher": "Гончарова С.А. (пр.)",
        "group_name": "22ПМ1д"
    },
    {
        "id": "140",
        "lesson_number": "6",
        "audience": "ауд. 219",
        "group_id": "4",
        "day_number": "4",
        "subject": "Иностранный язык (пз)(фак-в)",
        "subgroup_id": "2",
        "teacher": "Кажекина Л.В. (ст.пр.)",
        "group_name": "22ПМ1д"
    },
    {
        "id": "141",
        "lesson_number": "2",
        "audience": "ауд. 200е",
        "group_id": "4",
        "day_number": "5",
        "subject": "Разработка кросс-платформенных приложений (лаб)",
        "subgroup_id": "1",
        "teacher": "Степанов В.А. (пр.)",
        "group_name": "22ПМ1д"
    },
    {
        "id": "142",
        "lesson_number": "2",
        "audience": "ауд. 221",
        "group_id": "4",
        "day_number": "5",
        "subject": "Разработка кросс-платформенных приложений (лаб)",
        "subgroup_id": "2",
        "teacher": "Столяренко А.Ю. (пр.)",
        "group_name": "22ПМ1д"
    },
    {
        "id": "143",
        "lesson_number": "3",
        "audience": "ауд. 703",
        "group_id": "4",
        "day_number": "5",
        "subject": "Иностранный язык (пз)(фак-в)",
        "subgroup_id": null,
        "teacher": "Гончарова С.А. (пр.)",
        "group_name": "22ПМ1д"
    },
    {
        "id": "144",
        "lesson_number": "4",
        "audience": "ауд. 703",
        "group_id": "4",
        "day_number": "5",
        "subject": "Иностранный язык (пз)(фак-в)",
        "subgroup_id": null,
        "teacher": "Гончарова С.А. (пр.)",
        "group_name": "22ПМ1д"
    },
    {
        "id": "145",
        "lesson_number": "5",
        "audience": "ауд. 119",
        "group_id": "4",
        "day_number": "5",
        "subject": "Дифференциальное и интегральное исчисление (пз)",
        "subgroup_id": null,
        "teacher": "Иванова Ж.В. (доц.)",
        "group_name": "22ПМ1д"
    }
]
break;
case 5:
response=[
    {
        "id": "146",
        "lesson_number": "1",
        "audience": "",
        "group_id": "5",
        "day_number": "1",
        "subject": "Физическая культура (пз)",
        "subgroup_id": null,
        "teacher": "",
        "group_name": "22ПОИТ1д"
    },
    {
        "id": "147",
        "lesson_number": "2",
        "audience": "ауд. 308",
        "group_id": "5",
        "day_number": "1",
        "subject": "Алгоритмы и структуры данных (лаб)",
        "subgroup_id": "1",
        "teacher": "Исаченко Ю.В. (пр.)",
        "group_name": "22ПОИТ1д"
    },
    {
        "id": "148",
        "lesson_number": "2",
        "audience": "ауд. 309",
        "group_id": "5",
        "day_number": "1",
        "subject": "Численные методы (лаб)",
        "subgroup_id": "2",
        "teacher": "Витько Е.А. (доц.)",
        "group_name": "22ПОИТ1д"
    },
    {
        "id": "149",
        "lesson_number": "3",
        "audience": "ауд. 212",
        "group_id": "5",
        "day_number": "1",
        "subject": "Управление научно-исследовательской деятельностью (лк)(фак-в)",
        "subgroup_id": null,
        "teacher": "Богатырёва В.В. (проф.)",
        "group_name": "22ПОИТ1д"
    },
    {
        "id": "150",
        "lesson_number": "4",
        "audience": "ауд. 526",
        "group_id": "5",
        "day_number": "1",
        "subject": "Математический анализ (лк)",
        "subgroup_id": null,
        "teacher": "Иванова Ж.В. (доц.)",
        "group_name": "22ПОИТ1д"
    },
    {
        "id": "151",
        "lesson_number": "5",
        "audience": "ауд. 218",
        "group_id": "5",
        "day_number": "1",
        "subject": "Основы алгоритмизации и программирования (лаб)",
        "subgroup_id": "1",
        "teacher": "Исаченко Ю.В. (пр.)",
        "group_name": "22ПОИТ1д"
    },
    {
        "id": "152",
        "lesson_number": "5",
        "audience": "ауд. 219",
        "group_id": "5",
        "day_number": "1",
        "subject": "Иностранный язык (пз)(фак-в)",
        "subgroup_id": "2",
        "teacher": "Кажекина Л.В. (ст.пр.)",
        "group_name": "22ПОИТ1д"
    },
    {
        "id": "153",
        "lesson_number": "2",
        "audience": "ауд. 530",
        "group_id": "5",
        "day_number": "2",
        "subject": "Математический анализ (пз)",
        "subgroup_id": null,
        "teacher": "Александрович Т.А. (ст.пр.)",
        "group_name": "22ПОИТ1д"
    },
    {
        "id": "154",
        "lesson_number": "3",
        "audience": "ауд. 412",
        "group_id": "5",
        "day_number": "2",
        "subject": "Коррупция и её общественная опасность (лк)(фак-в)",
        "subgroup_id": null,
        "teacher": "Путова Н.В. (ст.пр.)",
        "group_name": "22ПОИТ1д"
    },
    {
        "id": "155",
        "lesson_number": "4",
        "audience": "ауд. 221",
        "group_id": "5",
        "day_number": "2",
        "subject": "Конструирование программного обеспечения (лаб)",
        "subgroup_id": "1",
        "teacher": "Исаченко Ю.В. (пр.)",
        "group_name": "22ПОИТ1д"
    },
    {
        "id": "156",
        "lesson_number": "4",
        "audience": "ауд. 219",
        "group_id": "5",
        "day_number": "2",
        "subject": "Алгоритмы и структуры данных (лаб)",
        "subgroup_id": "2",
        "teacher": "Иванова Л.В. (пр.)",
        "group_name": "22ПОИТ1д"
    },
    {
        "id": "157",
        "lesson_number": "5",
        "audience": "ауд. 213",
        "group_id": "5",
        "day_number": "2",
        "subject": "Профессиональная культура специалиста (пз)",
        "subgroup_id": null,
        "teacher": "Гелясина Е.В. (доц.)",
        "group_name": "22ПОИТ1д"
    },
    {
        "id": "158",
        "lesson_number": "6",
        "audience": "ауд. 306",
        "group_id": "5",
        "day_number": "2",
        "subject": "Численные методы (лк)",
        "subgroup_id": null,
        "teacher": "Витько Е.А. (доц.)",
        "group_name": "22ПОИТ1д"
    },
    {
        "id": "159",
        "lesson_number": "2",
        "audience": "ауд. 333",
        "group_id": "5",
        "day_number": "3",
        "subject": "Численные методы (лаб)",
        "subgroup_id": "1",
        "teacher": "Витько Е.А. (доц.)",
        "group_name": "22ПОИТ1д"
    },
    {
        "id": "160",
        "lesson_number": "2",
        "audience": "ауд. 313",
        "group_id": "5",
        "day_number": "3",
        "subject": "Медиакультура личности (лаб)(фак-в)",
        "subgroup_id": "2",
        "teacher": "Стайнова А.А. (пр.)",
        "group_name": "22ПОИТ1д"
    },
    {
        "id": "161",
        "lesson_number": "3",
        "audience": "ауд. 517",
        "group_id": "5",
        "day_number": "3",
        "subject": "Иностранный язык (пз)(фак-в)",
        "subgroup_id": "1",
        "teacher": "Балло Ю.А. (ст.пр.)",
        "group_name": "22ПОИТ1д"
    },
    {
        "id": "162",
        "lesson_number": "3",
        "audience": "ауд. 703",
        "group_id": "5",
        "day_number": "3",
        "subject": "Иностранный язык (пз)(фак-в)",
        "subgroup_id": "2",
        "teacher": "Шкатуло Н.М. (ст.пр.)",
        "group_name": "22ПОИТ1д"
    },
    {
        "id": "163",
        "lesson_number": "4",
        "audience": "ауд. 517",
        "group_id": "5",
        "day_number": "3",
        "subject": "Иностранный язык (пз)(фак-в)",
        "subgroup_id": "1",
        "teacher": "Балло Ю.А. (ст.пр.)",
        "group_name": "22ПОИТ1д"
    },
    {
        "id": "164",
        "lesson_number": "4",
        "audience": "ауд. 703",
        "group_id": "5",
        "day_number": "3",
        "subject": "Иностранный язык (пз)(фак-в)",
        "subgroup_id": "2",
        "teacher": "Шкатуло Н.М. (ст.пр.)",
        "group_name": "22ПОИТ1д"
    },
    {
        "id": "165",
        "lesson_number": "5",
        "audience": "",
        "group_id": "5",
        "day_number": "3",
        "subject": "Физическая культура (пз)",
        "subgroup_id": null,
        "teacher": "",
        "group_name": "22ПОИТ1д"
    },
    {
        "id": "166",
        "lesson_number": "2",
        "audience": "ауд. 141",
        "group_id": "5",
        "day_number": "4",
        "subject": "Основы алгоритмизации и программирования (лк)",
        "subgroup_id": null,
        "teacher": "Корчевская Е.А. (доц.)",
        "group_name": "22ПОИТ1д"
    },
    {
        "id": "167",
        "lesson_number": "3",
        "audience": "ауд. 313",
        "group_id": "5",
        "day_number": "4",
        "subject": "Медиакультура личности (лаб)(фак-в)",
        "subgroup_id": "1",
        "teacher": "Витько Е.А. (доц.)",
        "group_name": "22ПОИТ1д"
    },
    {
        "id": "168",
        "lesson_number": "3",
        "audience": "ауд. 308",
        "group_id": "5",
        "day_number": "4",
        "subject": "Конструирование программного обеспечения (лаб)",
        "subgroup_id": "2",
        "teacher": "Иванова Л.В. (пр.)",
        "group_name": "22ПОИТ1д"
    },
    {
        "id": "169",
        "lesson_number": "4",
        "audience": "ауд. 534",
        "group_id": "5",
        "day_number": "4",
        "subject": "Математический анализ (лк)",
        "subgroup_id": null,
        "teacher": "Иванова Ж.В. (доц.)",
        "group_name": "22ПОИТ1д"
    },
    {
        "id": "170",
        "lesson_number": "5",
        "audience": "",
        "group_id": "5",
        "day_number": "4",
        "subject": "",
        "subgroup_id": "1",
        "teacher": "",
        "group_name": "22ПОИТ1д"
    },
    {
        "id": "171",
        "lesson_number": "5",
        "audience": "ауд. 309",
        "group_id": "5",
        "day_number": "4",
        "subject": "Основы алгоритмизации и программирования (лаб)",
        "subgroup_id": "2",
        "teacher": "Иванова Л.В. (пр.)",
        "group_name": "22ПОИТ1д"
    },
    {
        "id": "172",
        "lesson_number": "6",
        "audience": "",
        "group_id": "5",
        "day_number": "4",
        "subject": "",
        "subgroup_id": "1",
        "teacher": "",
        "group_name": "22ПОИТ1д"
    },
    {
        "id": "173",
        "lesson_number": "6",
        "audience": "ауд. 219",
        "group_id": "5",
        "day_number": "4",
        "subject": "Иностранный язык (пз)(фак-в)",
        "subgroup_id": "2",
        "teacher": "Кажекина Л.В. (ст.пр.)",
        "group_name": "22ПОИТ1д"
    },
    {
        "id": "174",
        "lesson_number": "2",
        "audience": "ауд. 412",
        "group_id": "5",
        "day_number": "5",
        "subject": "Алгоритмы и структуры данных (лк)",
        "subgroup_id": null,
        "teacher": "Никитин А.И. (доц.)",
        "group_name": "22ПОИТ1д"
    },
    {
        "id": "175",
        "lesson_number": "3",
        "audience": "ауд. 141",
        "group_id": "5",
        "day_number": "5",
        "subject": "Физика (лк)",
        "subgroup_id": null,
        "teacher": "Пышненко О.В. (ст.пр.)",
        "group_name": "22ПОИТ1д"
    },
    {
        "id": "176",
        "lesson_number": "4",
        "audience": "ауд. 119",
        "group_id": "5",
        "day_number": "5",
        "subject": "Физика (лк)",
        "subgroup_id": null,
        "teacher": "Пышненко О.В. (ст.пр.)",
        "group_name": "22ПОИТ1д"
    },
    {
        "id": "177",
        "lesson_number": "5",
        "audience": "ауд. 307",
        "group_id": "5",
        "day_number": "5",
        "subject": "ВП (практика)",
        "subgroup_id": "1",
        "teacher": "Исаченко Ю.В. (пр.)",
        "group_name": "22ПОИТ1д"
    },
    {
        "id": "178",
        "lesson_number": "5",
        "audience": "ауд. 309",
        "group_id": "5",
        "day_number": "5",
        "subject": "ВП (практика)",
        "subgroup_id": "2",
        "teacher": "Иванова Л.В. (пр.)",
        "group_name": "22ПОИТ1д"
    }
]
break;
case 6:
response=[
    {
        "id": "179",
        "lesson_number": "1",
        "audience": "",
        "group_id": "6",
        "day_number": "1",
        "subject": "Физическая культура (пз)",
        "subgroup_id": null,
        "teacher": "",
        "group_name": "22УИР1д"
    },
    {
        "id": "180",
        "lesson_number": "2",
        "audience": "ауд. 425",
        "group_id": "6",
        "day_number": "1",
        "subject": "Алгоритмизация и программирование (лк)",
        "subgroup_id": null,
        "teacher": "Корчевская Е.А. (доц.)",
        "group_name": "22УИР1д"
    },
    {
        "id": "181",
        "lesson_number": "3",
        "audience": "ауд. 526",
        "group_id": "6",
        "day_number": "1",
        "subject": "Высшая математика (пз)",
        "subgroup_id": null,
        "teacher": "Шлапаков С.А. (доц.)",
        "group_name": "22УИР1д"
    },
    {
        "id": "182",
        "lesson_number": "4",
        "audience": "ауд. 425",
        "group_id": "6",
        "day_number": "1",
        "subject": "Экономическая теория (пз)",
        "subgroup_id": null,
        "teacher": "Трацевская Л.Ф. (доц.)",
        "group_name": "22УИР1д"
    },
    {
        "id": "183",
        "lesson_number": "5",
        "audience": "ауд. 219",
        "group_id": "6",
        "day_number": "1",
        "subject": "Иностранный язык (пз)(фак-в)",
        "subgroup_id": null,
        "teacher": "Кажекина Л.В. (ст.пр.)",
        "group_name": "22УИР1д"
    },
    {
        "id": "184",
        "lesson_number": "2",
        "audience": "ауд. 212",
        "group_id": "6",
        "day_number": "2",
        "subject": "Философия (лк)",
        "subgroup_id": null,
        "teacher": "Рудковский Э.И. (доц.)",
        "group_name": "22УИР1д"
    },
    {
        "id": "185",
        "lesson_number": "3",
        "audience": "ауд. конф. зал",
        "group_id": "6",
        "day_number": "2",
        "subject": "Управление научно-исследовательской деятельностью (лк)(фак-в)",
        "subgroup_id": null,
        "teacher": "Богатырёва В.В. (проф.)",
        "group_name": "22УИР1д"
    },
    {
        "id": "186",
        "lesson_number": "4",
        "audience": "ауд. 333",
        "group_id": "6",
        "day_number": "2",
        "subject": "Медиакультура личности (пз)(фак-в)",
        "subgroup_id": null,
        "teacher": "Витько Е.А. (доц.)",
        "group_name": "22УИР1д"
    },
    {
        "id": "187",
        "lesson_number": "5",
        "audience": "ауд. 530",
        "group_id": "6",
        "day_number": "2",
        "subject": "Основы права (лк)",
        "subgroup_id": null,
        "teacher": "Сафонова Т.В. (ст.пр.)",
        "group_name": "22УИР1д"
    },
    {
        "id": "188",
        "lesson_number": "6",
        "audience": "ауд. 530",
        "group_id": "6",
        "day_number": "2",
        "subject": "Экономика организации (пз)",
        "subgroup_id": null,
        "teacher": "Янкевич Е.М. (ст.пр.)",
        "group_name": "22УИР1д"
    },
    {
        "id": "189",
        "lesson_number": "2",
        "audience": "ауд. 526",
        "group_id": "6",
        "day_number": "3",
        "subject": "Дискретная математика (лк)",
        "subgroup_id": null,
        "teacher": "Караулова Т.Б. (ст.пр.)",
        "group_name": "22УИР1д"
    },
    {
        "id": "190",
        "lesson_number": "3",
        "audience": "ауд. 703",
        "group_id": "6",
        "day_number": "3",
        "subject": "Иностранный язык (пз)(фак-в)",
        "subgroup_id": "1",
        "teacher": "Шкатуло Н.М. (ст.пр.)",
        "group_name": "22УИР1д"
    },
    {
        "id": "191",
        "lesson_number": "3",
        "audience": "ауд. 219",
        "group_id": "6",
        "day_number": "3",
        "subject": "Иностранный язык (пз)(фак-в)",
        "subgroup_id": "2",
        "teacher": "Кажекина Л.В. (ст.пр.)",
        "group_name": "22УИР1д"
    },
    {
        "id": "192",
        "lesson_number": "4",
        "audience": "ауд. 703",
        "group_id": "6",
        "day_number": "3",
        "subject": "Иностранный язык (пз)(фак-в)",
        "subgroup_id": "1",
        "teacher": "Шкатуло Н.М. (ст.пр.)",
        "group_name": "22УИР1д"
    },
    {
        "id": "193",
        "lesson_number": "4",
        "audience": "ауд. 219",
        "group_id": "6",
        "day_number": "3",
        "subject": "Иностранный язык (пз)(фак-в)",
        "subgroup_id": "2",
        "teacher": "Кажекина Л.В. (ст.пр.)",
        "group_name": "22УИР1д"
    },
    {
        "id": "194",
        "lesson_number": "5",
        "audience": "",
        "group_id": "6",
        "day_number": "3",
        "subject": "Физическая культура (пз)",
        "subgroup_id": null,
        "teacher": "",
        "group_name": "22УИР1д"
    },
    {
        "id": "195",
        "lesson_number": "2",
        "audience": "ауд. 425",
        "group_id": "6",
        "day_number": "4",
        "subject": "Системная интеграция и конфигурирование программного обеспечения (лк)",
        "subgroup_id": null,
        "teacher": "Жук Т.Д. (пр.)",
        "group_name": "22УИР1д"
    },
    {
        "id": "196",
        "lesson_number": "3",
        "audience": "ауд. 526",
        "group_id": "6",
        "day_number": "4",
        "subject": "Высшая математика (лк)",
        "subgroup_id": null,
        "teacher": "Шлапаков С.А. (доц.)",
        "group_name": "22УИР1д"
    },
    {
        "id": "197",
        "lesson_number": "4",
        "audience": "ауд. 425",
        "group_id": "6",
        "day_number": "4",
        "subject": "Экономическая теория (лк)",
        "subgroup_id": null,
        "teacher": "Трацевская Л.Ф. (доц.)",
        "group_name": "22УИР1д"
    },
    {
        "id": "198",
        "lesson_number": "5",
        "audience": "ауд. 307",
        "group_id": "6",
        "day_number": "4",
        "subject": "Алгоритмизация и программирование (лаб)",
        "subgroup_id": "1",
        "teacher": "Столяренко А.Ю. (пр.)",
        "group_name": "22УИР1д"
    },
    {
        "id": "199",
        "lesson_number": "5",
        "audience": "ауд. 306",
        "group_id": "6",
        "day_number": "4",
        "subject": "Алгоритмизация и программирование (лаб)",
        "subgroup_id": "2",
        "teacher": "Степанов В.А. (пр.)",
        "group_name": "22УИР1д"
    },
    {
        "id": "200",
        "lesson_number": "6",
        "audience": "ауд. 219",
        "group_id": "6",
        "day_number": "4",
        "subject": "Иностранный язык (пз)(фак-в)",
        "subgroup_id": null,
        "teacher": "Кажекина Л.В. (ст.пр.)",
        "group_name": "22УИР1д"
    },
    {
        "id": "201",
        "lesson_number": "2",
        "audience": "ауд. 534",
        "group_id": "6",
        "day_number": "5",
        "subject": "Дискретная математика (пз)",
        "subgroup_id": null,
        "teacher": "Караулова Т.Б. (ст.пр.)",
        "group_name": "22УИР1д"
    },
    {
        "id": "202",
        "lesson_number": "3",
        "audience": "ауд. 119",
        "group_id": "6",
        "day_number": "5",
        "subject": "Экономика организации (лк)",
        "subgroup_id": null,
        "teacher": "Янкевич Е.М. (ст.пр.)",
        "group_name": "22УИР1д"
    },
    {
        "id": "203",
        "lesson_number": "4",
        "audience": "ауд. 528",
        "group_id": "6",
        "day_number": "5",
        "subject": "Основы права (лк)",
        "subgroup_id": null,
        "teacher": "Сафонова Т.В. (ст.пр.)",
        "group_name": "22УИР1д"
    },
    {
        "id": "204",
        "lesson_number": "5",
        "audience": "ауд. 526",
        "group_id": "6",
        "day_number": "5",
        "subject": "Философия (пз)",
        "subgroup_id": null,
        "teacher": "Рудковский Э.И. (доц.)",
        "group_name": "22УИР1д"
    }
]
break;
case 7:
response=[
    {
        "id": "205",
        "lesson_number": "1",
        "audience": "",
        "group_id": "7",
        "day_number": "1",
        "subject": "Физическая культура (пз)",
        "subgroup_id": null,
        "teacher": "",
        "group_name": "22ФИЗ1д"
    },
    {
        "id": "206",
        "lesson_number": "2",
        "audience": "ауд. 534",
        "group_id": "7",
        "day_number": "1",
        "subject": "Математический анализ (пз)",
        "subgroup_id": null,
        "teacher": "Чернявский М.М. (пр.)",
        "group_name": "22ФИЗ1д"
    },
    {
        "id": "207",
        "lesson_number": "3",
        "audience": "ауд. 212",
        "group_id": "7",
        "day_number": "1",
        "subject": "Управление научно-исследовательской деятельностью (лк)(фак-в)",
        "subgroup_id": null,
        "teacher": "Богатырёва В.В. (проф.)",
        "group_name": "22ФИЗ1д"
    },
    {
        "id": "208",
        "lesson_number": "4",
        "audience": "ауд. 317",
        "group_id": "7",
        "day_number": "1",
        "subject": "Дифференциальные и интегральные уравнения (лк)",
        "subgroup_id": null,
        "teacher": "Трубников Ю.В. (проф.)",
        "group_name": "22ФИЗ1д"
    },
    {
        "id": "209",
        "lesson_number": "5",
        "audience": "ауд. 219",
        "group_id": "7",
        "day_number": "1",
        "subject": "Иностранный язык (пз)(фак-в)",
        "subgroup_id": null,
        "teacher": "Кажекина Л.В. (ст.пр.)",
        "group_name": "22ФИЗ1д"
    },
    {
        "id": "210",
        "lesson_number": "6",
        "audience": "ауд. 319",
        "group_id": "7",
        "day_number": "1",
        "subject": "Философия (пз)",
        "subgroup_id": null,
        "teacher": "Боярщонок Н.М. (пр.)",
        "group_name": "22ФИЗ1д"
    },
    {
        "id": "211",
        "lesson_number": "2",
        "audience": "ауд. 212",
        "group_id": "7",
        "day_number": "2",
        "subject": "Философия (лк)",
        "subgroup_id": null,
        "teacher": "Рудковский Э.И. (доц.)",
        "group_name": "22ФИЗ1д"
    },
    {
        "id": "212",
        "lesson_number": "3",
        "audience": "ауд. 317",
        "group_id": "7",
        "day_number": "2",
        "subject": "Дифференциальные и интегральные уравнения (пз)",
        "subgroup_id": null,
        "teacher": "Чернявский М.М. (пр.)",
        "group_name": "22ФИЗ1д"
    },
    {
        "id": "213",
        "lesson_number": "4",
        "audience": "ауд. 501",
        "group_id": "7",
        "day_number": "2",
        "subject": "Белорусский язык (профессиональная лексика) (пз)",
        "subgroup_id": null,
        "teacher": "Зайцева Е.А. (ст.пр.)",
        "group_name": "22ФИЗ1д"
    },
    {
        "id": "214",
        "lesson_number": "5",
        "audience": "ауд. 113",
        "group_id": "7",
        "day_number": "2",
        "subject": "Математический анализ (лк)",
        "subgroup_id": null,
        "teacher": "Трубников Ю.В. (проф.)",
        "group_name": "22ФИЗ1д"
    },
    {
        "id": "215",
        "lesson_number": "2",
        "audience": "ауд. 412",
        "group_id": "7",
        "day_number": "3",
        "subject": "Элементарная физика (пз)",
        "subgroup_id": null,
        "teacher": "Пышненко О.В. (ст.пр.)",
        "group_name": "22ФИЗ1д"
    },
    {
        "id": "216",
        "lesson_number": "3",
        "audience": "ауд. 216",
        "group_id": "7",
        "day_number": "3",
        "subject": "Элементарная физика (лк)",
        "subgroup_id": null,
        "teacher": "Пышненко О.В. (ст.пр.)",
        "group_name": "22ФИЗ1д"
    },
    {
        "id": "217",
        "lesson_number": "4",
        "audience": "ауд. 317",
        "group_id": "7",
        "day_number": "3",
        "subject": "Математический анализ (лк)",
        "subgroup_id": null,
        "teacher": "Трубников Ю.В. (проф.)",
        "group_name": "22ФИЗ1д"
    },
    {
        "id": "218",
        "lesson_number": "5",
        "audience": "",
        "group_id": "7",
        "day_number": "3",
        "subject": "Физическая культура (пз)",
        "subgroup_id": null,
        "teacher": "",
        "group_name": "22ФИЗ1д"
    },
    {
        "id": "219",
        "lesson_number": "2",
        "audience": "ауд. 141",
        "group_id": "7",
        "day_number": "4",
        "subject": "Основы алгоритмизации и программирования (лк)",
        "subgroup_id": null,
        "teacher": "Корчевская Е.А. (доц.)",
        "group_name": "22ФИЗ1д"
    },
    {
        "id": "220",
        "lesson_number": "3",
        "audience": "ауд. 317",
        "group_id": "7",
        "day_number": "4",
        "subject": "Дифференциальные и интегральные уравнения (лк)",
        "subgroup_id": null,
        "teacher": "Трубников Ю.В. (проф.)",
        "group_name": "22ФИЗ1д"
    },
    {
        "id": "221",
        "lesson_number": "4",
        "audience": "ауд. 308",
        "group_id": "7",
        "day_number": "4",
        "subject": "Основы алгоритмизации и программирования (лаб)",
        "subgroup_id": "1",
        "teacher": "Исаченко Ю.В. (пр.)",
        "group_name": "22ФИЗ1д"
    },
    {
        "id": "222",
        "lesson_number": "4",
        "audience": "ауд. 303",
        "group_id": "7",
        "day_number": "4",
        "subject": "Основы алгоритмизации и программирования (лаб)",
        "subgroup_id": "2",
        "teacher": "Степанов В.А. (пр.)",
        "group_name": "22ФИЗ1д"
    },
    {
        "id": "223",
        "lesson_number": "5",
        "audience": "ауд. 216",
        "group_id": "7",
        "day_number": "4",
        "subject": "Элементарная физика (пз)",
        "subgroup_id": null,
        "teacher": "Пышненко О.В. (ст.пр.)",
        "group_name": "22ФИЗ1д"
    },
    {
        "id": "224",
        "lesson_number": "6",
        "audience": "ауд. 219",
        "group_id": "7",
        "day_number": "4",
        "subject": "Иностранный язык (пз)(фак-в)",
        "subgroup_id": null,
        "teacher": "Кажекина Л.В. (ст.пр.)",
        "group_name": "22ФИЗ1д"
    },
    {
        "id": "225",
        "lesson_number": "2",
        "audience": "ауд. 627",
        "group_id": "7",
        "day_number": "5",
        "subject": "Молекулярная физика (пз)",
        "subgroup_id": null,
        "teacher": "Чернявский М.М. (пр.)",
        "group_name": "22ФИЗ1д"
    },
    {
        "id": "226",
        "lesson_number": "3",
        "audience": "ауд. 219",
        "group_id": "7",
        "day_number": "5",
        "subject": "Иностранный язык (пз)",
        "subgroup_id": null,
        "teacher": "Кажекина Л.В. (ст.пр.)",
        "group_name": "22ФИЗ1д"
    },
    {
        "id": "227",
        "lesson_number": "4",
        "audience": "ауд. 219",
        "group_id": "7",
        "day_number": "5",
        "subject": "Иностранный язык (пз)",
        "subgroup_id": null,
        "teacher": "Кажекина Л.В. (ст.пр.)",
        "group_name": "22ФИЗ1д"
    }
]
break;



    }
    setTimeout(()=>{
        dispatch(setSchedule(response, group_id));
        dispatch(isFetching(false))
    }, 500)
}


export const isFetching = (isFetching) => ({type: IS_FETCHING, isFetching})
export const setGroup = (group_id) => ({type: SET_GROUP, group_id})

export const selectGroup = (group_id) => async (dispatch) => {
    localStorage.setItem("group_id", group_id)
    dispatch(setGroup(group_id));
}

const resetGroupAction = ()=> ({type: RESET_GROUP})

export const resetGroup = ()=> (dispatch) => {
    dispatch(resetGroupAction())
}

export default scheduleReducer;
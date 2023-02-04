import requests
import time
from bs4 import BeautifulSoup
import mysql.connector
import openpyxl
import subprocess
import sys
import urllib3
urllib3.disable_warnings()

savedlink = ""
link = ""




def getMergedCellVal(sheet, cell): # Получить данные ячейки
    rng = [s for s in sheet.merged_cells.ranges if cell.coordinate in s]
    return sheet.cell(rng[0].min_row, rng[0].min_col).value if len(rng)!=0 else cell.value

def getCellVal(sheet, letter, num):
    getMergedCellVal(sheet, sheet[f'{letter}{num}'])

def downloadXls(url):
    try:
        r = requests.get(url, verify=False) # Скачиваем таблицу по полученной ссылке
        open("table.xls", 'wb').write(r.content)
        xlsToMysql()
    except:
        print("Error while downloading xls!")
        sys.exit()


def xlsToMysql():
    connect = mysql.connector.connect(host="localhost", user="root", password="Rostik3015", database="stdtest") # Подключение к базе данных
    cursor = connect.cursor()
    bashcmd = "libreoffice --convert-to xlsx table.xls --headless" # Конвертация xls в xlsx через libreoffice для работы через модуль openpyxl
    process = subprocess.Popen(bashcmd.split(), stdout=subprocess.PIPE) 
    output, error = process.communicate()

    wb = openpyxl.load_workbook("table.xlsx") # Открываем таблицу
    sheet = wb.active # Открываем лист
    cursor.execute("""TRUNCATE schedule""") # Стираем базу данных :)

    startfrom = 0 # Стартовая строка
    def checkDay(start, dayname, day_number, group_id, group_name, firstLetter, secondLetter):
        startpos = start

        for i in range(1, 8):  # Проверяем 8 пар
            subjectName = ""
            teacherFirstGroup = ""
            teacherSecondGroup = ""
            teacherOfBothGroups = ""
            audienceFirstGroup = ""
            audienceSecondGroup = ""
            audienceOfBothGroups = ""

            pos = startpos # Название предмета (1 строка)
            #if (getCellVal(sheet, firstLetter, pos) != None):
            subjectName = getCellVal(sheet, firstLetter, pos)

            pos = startpos + 1 # Преподаватель (2 строка)
            #if(getCellVal(sheet, firstLetter, pos) != None):
            if(getCellVal(sheet, firstLetter, pos) != getCellVal(sheet, secondLetter, pos)): # Две группы
                teacherFirstGroup = getCellVal(sheet, firstLetter, pos) # Первая подгруппа
                #if(getCellVal(sheet, secondLetter, pos) != None):
                teacherSecondGroup = getCellVal(sheet, secondLetter, pos) # Вторая подгруппа
            else:
                teacherOfBothGroups = getCellVal(sheet, firstLetter, pos) # Общий преподаватель
            #elif(getCellVal(sheet, secondLetter, pos) != None):
             #   teacherSecondGroup = getCellVal(sheet, secondLetter, pos) # Вторая подгруппа
                    
            pos = startpos + 2 # Аудитория (3 строка)
            if(getCellVal(sheet, firstLetter, pos) != None):
                if(getCellVal(sheet, firstLetter, pos) != getCellVal(sheet, secondLetter, pos)):
                    if(getCellVal(sheet, firstLetter, pos) != None):
                        audienceFirstGroup = getCellVal(sheet, firstLetter, pos)
                    if(getCellVal(sheet, secondLetter, pos) != None):
                        audienceSecondGroup = getCellVal(sheet, secondLetter, pos)
                else:
                    audienceOfBothGroups = getCellVal(sheet, firstLetter, pos)

            if(teacherFirstGroup != "" or teacherSecondGroup != "" or audienceFirstGroup != "" or audienceSecondGroup != ""):
                print("gg: "+teacherFirstGroup+" "+teacherSecondGroup+" "+audienceFirstGroup+" "+audienceSecondGroup)
                try:
                    cursor.execute("""INSERT INTO `schedule` (id, lesson_number, audience, group_id, day_number, subject, subgroup_id, teacher, group_name) VALUES (NULL, '"""+str(i)+"""', '"""+str(audienceFirstGroup)+"""', '"""+str(group_id)+"""', '"""+str(day_number)+"""', '"""+subjectName+"""', '1', '"""+teacherFirstGroup+"""', '"""+group_name+"""');""")
                    cursor.execute("""INSERT INTO `schedule` (id, lesson_number, audience, group_id, day_number, subject, subgroup_id, teacher, group_name) VALUES (NULL, '"""+str(i)+"""', '"""+str(audienceSecondGroup)+"""', '"""+str(group_id)+"""', '"""+str(day_number)+"""', '"""+subjectName+"""', '2', '"""+teacherSecondGroup+"""', '"""+group_name+"""');""")
                    print("""INSERT INTO `schedule` (id, lesson_number, audience, group_id, day_number, subject, subgroup_id, teacher, group_name) VALUES (NULL, '"""+str(i)+"""', '"""+str(audienceFirstGroup)+"""', '"""+str(group_id)+"""', '"""+str(day_number)+"""', '"""+subjectName+"""', '1', '"""+teacherFirstGroup+"""', '"""+group_name+"""');""")
                    print("""INSERT INTO `schedule` (id, lesson_number, audience, group_id, day_number, subject, subgroup_id, teacher, group_name) VALUES (NULL, '"""+str(i)+"""', '"""+str(audienceSecondGroup)+"""', '"""+str(group_id)+"""', '"""+str(day_number)+"""', '"""+subjectName+"""', '2', '"""+teacherSecondGroup+"""', '"""+group_name+"""');""")
                    connect.commit()

                except mysql.connector.Error as err:
                    print("Something went wrong: {}".format(err))

            elif(teacherOfBothGroups != "" or audienceOfBothGroups != "" or subjectName != ""):
                try:
                    cursor.execute("""INSERT INTO `schedule` (id, lesson_number, audience, group_id, day_number, subject, subgroup_id, teacher, group_name) VALUES (NULL, '"""+str(i)+"""', '"""+str(audienceOfBothGroups)+"""', '"""+str(group_id)+"""', '"""+str(day_number)+"""', '"""+subjectName+"""', NULL, '"""+teacherOfBothGroups+"""', '"""+group_name+"""');""")
                    print("""INSERT INTO `schedule` (id, lesson_number, audience, group_id, day_number, subject, subgroup_id, teacher, group_name) VALUES (NULL, '"""+str(i)+"""', '"""+str(audienceOfBothGroups)+"""', '"""+str(group_id)+"""', '"""+str(day_number)+"""', '"""+subjectName+"""', NULL, '"""+teacherOfBothGroups+"""', '"""+group_name+"""'""")
                    connect.commit()
                except mysql.connector.Error as err:
                    print("Something went wrong: {}".format(err))
            startpos = startpos+3
        print("\n")

    for i in range(1,20):
        if(getMergedCellVal(sheet, sheet[f'N{i}']) == "14_1"):
            startfrom = i+1
            print(startfrom)
            print("start row found: "+str(startfrom))
            break
    monday = startfrom
    tuesday = startfrom+27
    wednesday = tuesday+27
    thursday = wednesday+27
    friday = thursday+27
    saturday = friday+27
    sunday = saturday+27
    groups = ["22ИСИТ1д", "22МИ1д", "22ПИ_ВЕБ1д", "22ПИ_ПОКС1д", "22ПМ1д", "22ПОИТ1д", "22УИР1д", "22ФИЗ1д"]
    firstLetters = ["D", "F", "H", "J", "L", "N", "P", "R"]
    secondLetters = [ "E", "G", "I", "K", "M", "O", "Q", "S"]
    for i in range(0, 8):
        checkDay(monday, "Понедельник", "1", i,groups[i], firstLetters[i], secondLetters[i])
        checkDay(tuesday, "Вторник", "2", i,groups[i],  firstLetters[i], secondLetters[i])
        checkDay(wednesday, "Среда", "3", i, groups[i], firstLetters[i], secondLetters[i])
        checkDay(thursday, "Четверг", "4", i,groups[i],  firstLetters[i], secondLetters[i])
        checkDay(friday, "Пятница", "5", i, groups[i], firstLetters[i], secondLetters[i])
        checkDay(saturday, "Суббота", "6", i,groups[i],  firstLetters[i], secondLetters[i])
        # checkDay(sunday, "Воскресенье", "7", i, groups[i], firstLetters[i], secondLetters[i])

def downloadHtml():
    print("Trying to download html page...")
    url = "http://vsu.by/universitet/fakultety/matematiki-i-it/raspisanie.html"
    headers = {
        'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.9; rv:45.0) Gecko/20100101 Firefox/45.0'
    }
    try:
        r = requests.get(url, verify=False, headers=headers) # Получение страницы
        data = r.text # Сохранение текста страницы
        open('schedule.html', 'w', encoding='utf-8').write(data) # Запись страницы в файл
        print("Page downloaded...") 
    except:
        print("Download failed, check URL.") 
        sys.exit()
    print("Trying to parse...")
    try:
        soup = BeautifulSoup(data, 'html.parser')
        link = "https://vsu.by"+soup.find('table', {'class': 'table-bordered'}).find('a').get("href") # Поиск ссылки на файл
    except:
        print("Parse failed, check link")
        sys.exit()
    try:
        savedlink = open("savedlink.txt").read() # Проверяем сохранена ли ссылка на прошлое
        print("Old link was found...")
        print("Trying to compare...")
        if(savedlink == link): # Сравниваем прошлое расписание с полученным
            print("Schedule is up to date :)!")
            return False
        else:
            open("savedlink.txt", 'w').write(link)
            print("starting update...")
            return True
    except:
        open("savedlink.txt", 'w').write(link)
        print("starting update...")
        return True


while(True):
    if(downloadHtml()):
        downloadXls(link)
    else:
        time.sleep(3600)


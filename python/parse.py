import requests
import time
from bs4 import BeautifulSoup
import mysql.connector
import openpyxl
import subprocess
import sys
import urllib3
urllib3.disable_warnings()

class colors:
    HEADER = '\033[95m'
    OKBLUE = '\033[94m'
    OKCYAN = '\033[96m'
    OKGREEN = '\033[92m'
    WARNING = '\033[93m'
    FAIL = '\033[91m'
    ENDC = '\033[0m'
    BOLD = '\033[1m'
    UNDERLINE = '\033[4m'

savedlink = ""

def getMergedCellVal(sheet, cell): # Получить данные ячейки
    rng = [s for s in sheet.merged_cells.ranges if cell.coordinate in s]
    return sheet.cell(rng[0].min_row, rng[0].min_col).value if len(rng)!=0 else cell.value

def getCellVal(sheet, letter, num):
    return getMergedCellVal(sheet, sheet[f'{letter}{num}'])

def downloadXls(url):
    try:
        r = requests.get(url, verify=False) # Скачиваем таблицу по полученной ссылке
        open("table.xls", 'wb').write(r.content)
        print(colors.OKGREEN+"Table downloaded..."+colors.ENDC) 
    except:
        print(colors.FAIL+"Error while downloading xls!"+colors.ENDC)
        sys.exit()
    xlsToMysql()


def xlsToMysql():
    connect = mysql.connector.connect(host="localhost", user="root", password="Rostik3015", database="stdtest") # Подключение к базе данных
    cursor = connect.cursor()
    bashcmd = "libreoffice --convert-to xlsx table.xls --headless" # Конвертация xls в xlsx через libreoffice для работы через модуль openpyxl
    process = subprocess.Popen(bashcmd.split(), stdout=subprocess.PIPE) 
    output, error = process.communicate()
    print(colors.OKGREEN+"Table converted from xls to xlsx..."+colors.ENDC) 
    wb = openpyxl.load_workbook("table.xlsx") # Открываем таблицу
    sheet = wb.active # Открываем лист
    cursor.execute("""TRUNCATE schedule""") # Стираем базу данных :)


    def checkDay(start, dayname, day_number, group_id, group_name, firstLetter, secondLetter):
        startpos = start
        days = ['Понедельник', "Вторник", "Среда", "Четверг", "Пятница", "Суббота"]
        for i in range(1, 8):  # Проверяем 8 пар
            subjectName = ""
            teacherFirstGroup = ""
            teacherSecondGroup = ""
            teacherOfBothGroups = ""
            audienceFirstGroup = ""
            audienceSecondGroup = ""
            audienceOfBothGroups = ""

            if(getCellVal(sheet, firstLetter, startpos) != None): # Название предмета (1 строка)
                subjectName = getCellVal(sheet, firstLetter, startpos) 

            pos = startpos + 1 # Преподаватель (2 строка)
            if(getCellVal(sheet, firstLetter, pos) != getCellVal(sheet, secondLetter, pos)): # Две группы
                if(getCellVal(sheet, firstLetter, pos) != None):
                    teacherFirstGroup = getCellVal(sheet, firstLetter, pos) # Первая подгруппа
                if(getCellVal(sheet, secondLetter, pos)):
                    teacherSecondGroup = getCellVal(sheet, secondLetter, pos) # Вторая подгруппа
            else:
                if(getCellVal(sheet, firstLetter, pos) != None):
                    teacherOfBothGroups = getCellVal(sheet, firstLetter, pos) # Общий преподаватель
                    
            pos = startpos + 2 # Аудитория (3 строка)
            if(getCellVal(sheet, firstLetter, pos) != getCellVal(sheet, secondLetter, pos)): # Две группы
                if(getCellVal(sheet, firstLetter, pos) != None):
                    audienceFirstGroup = getCellVal(sheet, firstLetter, pos) # Первая аудитория
                if(getCellVal(sheet, secondLetter, pos) != None):
                    audienceSecondGroup = getCellVal(sheet, secondLetter, pos) # Вторая аудитория
            else:
                if(getCellVal(sheet, firstLetter, pos) != None):
                    audienceOfBothGroups = getCellVal(sheet, firstLetter, pos) # Общая аудитория

            if(teacherFirstGroup or teacherSecondGroup or audienceFirstGroup or audienceSecondGroup): # Проверяем деление на группы
                try:
                    # print("""INSERT INTO `schedule` (id, lesson_number, audience, group_id, day_number, subject, subgroup_id, teacher, group_name) VALUES (NULL, '"""+str(i)+"""', '"""+str(audienceFirstGroup)+"""', '"""+str(group_id)+"""', '"""+str(day_number)+"""', '"""+subjectName+"""', '1', '"""+teacherFirstGroup+"""', '"""+group_name+"""');""")
                    # print("""INSERT INTO `schedule` (id, lesson_number, audience, group_id, day_number, subject, subgroup_id, teacher, group_name) VALUES (NULL, '"""+str(i)+"""', '"""+str(audienceSecondGroup)+"""', '"""+str(group_id)+"""', '"""+str(day_number)+"""', '"""+subjectName+"""', '2', '"""+teacherSecondGroup+"""', '"""+group_name+"""');""")
                    print(f"[{days[int(day_number)-1]} {group_name} {subjectName} 1:{str(audienceSecondGroup)} 2:{str(audienceSecondGroup)} 1:{teacherFirstGroup} 2:{teacherSecondGroup} ]")
                 
                    cursor.execute("""INSERT INTO `schedule` (id, lesson_number, audience, group_id, day_number, subject, subgroup_id, teacher, group_name) VALUES (NULL, '"""+str(i)+"""', '"""+str(audienceFirstGroup)+"""', '"""+str(group_id)+"""', '"""+str(day_number)+"""', '"""+subjectName+"""', '1', '"""+teacherFirstGroup+"""', '"""+group_name+"""');""")
                    cursor.execute("""INSERT INTO `schedule` (id, lesson_number, audience, group_id, day_number, subject, subgroup_id, teacher, group_name) VALUES (NULL, '"""+str(i)+"""', '"""+str(audienceSecondGroup)+"""', '"""+str(group_id)+"""', '"""+str(day_number)+"""', '"""+subjectName+"""', '2', '"""+teacherSecondGroup+"""', '"""+group_name+"""');""")
                    connect.commit()
                except mysql.connector.Error as err:
                    print("Something went wrong: {}".format(err))
            elif(teacherOfBothGroups != "" or audienceOfBothGroups != "" or subjectName != ""): # Общая пара
                try:
                    cursor.execute("""INSERT INTO `schedule` (id, lesson_number, audience, group_id, day_number, subject, subgroup_id, teacher, group_name) VALUES (NULL, '"""+str(i)+"""', '"""+str(audienceOfBothGroups)+"""', '"""+str(group_id)+"""', '"""+str(day_number)+"""', '"""+subjectName+"""', NULL, '"""+teacherOfBothGroups+"""', '"""+group_name+"""');""")
                    print(f"[{days[int(day_number)-1]} {group_name} {subjectName} {str(audienceOfBothGroups)} {teacherOfBothGroups}]")
                    # print("""INSERT INTO `schedule` (id, lesson_number, audience, group_id, day_number, subject, subgroup_id, teacher, group_name) VALUES (NULL, '"""+str(i)+"""', '"""+str(audienceOfBothGroups)+"""', '"""+str(group_id)+"""', '"""+str(day_number)+"""', '"""+subjectName+"""', NULL, '"""+teacherOfBothGroups+"""', '"""+group_name+"""'""")
                    connect.commit()
                except mysql.connector.Error as err:
                    print("Something went wrong: {}".format(err))
            startpos = startpos+3 # Сдвигаем стартовую позицию к следующей паре
        print("\n")
    startfrom = 0 # Стартовая строка
    for i in range(1,20): 
        if(getCellVal(sheet, "D", i) == "16_1"): # Ищем заголовок столбца
            startfrom = i+1 # Назначаем стартовую позицию (1 строка)
            print(colors.OKGREEN+"Start row was found: "+str(startfrom)+colors.ENDC)
            break

    monday = startfrom
    tuesday = startfrom+27
    wednesday = tuesday+27
    thursday = wednesday+27
    friday = thursday+27
    saturday = friday+27
    groups = ["22ИСИТ1д", "22МИ1д", "22ПИ_ВЕБ1д", "22ПИ_ПОКС1д", "22ПМ1д", "22ПОИТ1д", "22УИР1д", "22ФИЗ1д"]
    firstLetters = ["D", "F", "H", "J", "L", "N", "P", "R"]
    secondLetters = [ "E", "G", "I", "K", "M", "O", "Q", "S"]
    for i in range(0, 8): # Проверяем каждый день каждой группы
        checkDay(monday, "Понедельник", "1", i, groups[i], firstLetters[i], secondLetters[i])
        checkDay(tuesday, "Вторник", "2", i, groups[i],  firstLetters[i], secondLetters[i])
        checkDay(wednesday, "Среда", "3", i,  groups[i], firstLetters[i], secondLetters[i])
        checkDay(thursday, "Четверг", "4", i, groups[i],  firstLetters[i], secondLetters[i])
        checkDay(friday, "Пятница", "5", i, groups[i], firstLetters[i], secondLetters[i])
        checkDay(saturday, "Суббота", "6", i, groups[i],  firstLetters[i], secondLetters[i])

def downloadHtml():
    print(colors.WARNING+"Trying to download HTML page..."+colors.ENDC)
    url = "http://vsu.by/universitet/fakultety/matematiki-i-it/raspisanie.html"
    headers = {
        'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.9; rv:45.0) Gecko/20100101 Firefox/45.0'
    }
    try:
        r = requests.get(url, verify=False, headers=headers) # Получение страницы
        data = r.text # Сохранение текста страницы
        open('schedule.html', 'w', encoding='utf-8').write(data) # Запись страницы в файл
        print(colors.OKGREEN+"Page downloaded..."+colors.ENDC) 
    except:
        print(colors.FAIL+"Download failed, check URL."+colors.ENDC) 
        sys.exit()
    print(colors.WARNING+"Trying to parse..."+colors.ENDC)
    try:
        soup = BeautifulSoup(data, 'html.parser')
        link = "https://vsu.by"+soup.find('table', {'class': 'table-bordered'}).find('a').get("href") # Поиск ссылки на файл
    except:
        print(colors.FAIL+"Parse failed, check link"+colors.ENDC)
        sys.exit()
    try:
        savedlink = open("savedlink.txt").read() # Проверяем сохранена ли ссылка на прошлое
        print(colors.WARNING+"Old link was found..."+colors.ENDC)
        print(colors.WARNING+"Trying to compare..."+colors.ENDC)
        if(savedlink == link): # Сравниваем прошлое расписание с полученным
            print(colors.OKGREEN+"Schedule is up to date :)!"+colors.ENDC)
            return 0
        else:
            #open("savedlink.txt", 'w').write(link)
            print(colors.WARNING+"starting update..."+colors.ENDC)
            downloadXls(link)
    except:
        open("savedlink.txt", 'w').write(link)
        print(colors.WARNING+"starting update..."+colors.ENDC)
    downloadXls(link)

while(True):
    downloadHtml()
    time.sleep(3600)


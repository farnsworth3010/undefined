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

def downloadXls(url):
    r = requests.get(url, verify=False)
    open("table.xls", 'wb').write(r.content)
    xlsToMysql()

def getMergedCellVal(sheet, cell): # Получить данные ячейки
    rng = [s for s in sheet.merged_cells.ranges if cell.coordinate in s]
    return sheet.cell(rng[0].min_row, rng[0].min_col).value if len(rng)!=0 else cell.value

def xlsToMysql():
    connect = mysql.connector.connect(host="localhost", user="root", password="Rostik3015", database="stdtest") #connect to db
    cursor = connect.cursor()
    bashcmd = "libreoffice --convert-to xlsx table.xls --headless" # конвертация xls в xlsx через libreoffice
    process = subprocess.Popen(bashcmd.split(), stdout=subprocess.PIPE) 
    output, error = process.communicate()

    wb = openpyxl.load_workbook("table.xlsx") # открываем таблицу
    sheet = wb.active # открываем лист
    cursor.execute("""TRUNCATE schedule""") # стираем базу данных :)

    startfrom = 0 # Стартовая строка
    def checkDay(start, dayname, day_number, group_id, group_name, firstLetter, secondLetter):
        startpos = start

        for i in range(1, 8): 
            subjectName = ""
            teacherFirstGroup = ""
            teacherSecondGroup = ""
            teacherOfBothGroups = ""
            audienceFirstGroup = ""
            audienceSecondGroup = ""
            audienceOfBothGroups = ""
            # print(str(i)+" Пара")
            for j in range(startpos, startpos+3):
                if(j==startpos): # Название предмета (1 строка)
                    if(getMergedCellVal(sheet, sheet[f'{firstLetter}{j}']) == None):
                        continue
                    else:
                        subjectName = getMergedCellVal(sheet, sheet[f'{firstLetter}{j}'])
                        continue
                        # print(subjectName)
                elif(j==startpos+1):
                    # print("Преподаватель: ")
                    if(getMergedCellVal(sheet, sheet[f'{firstLetter}{j}']) == None):
                        continue
                    else:
                        if(getMergedCellVal(sheet, sheet[f'{firstLetter}{j}'])!=getMergedCellVal(sheet, sheet[f'{secondLetter}{j}'])):
                            if(getMergedCellVal(sheet, sheet[f'{firstLetter}{j}'])==None):
                                print()
                            else:
                                teacherFirstGroup = getMergedCellVal(sheet, sheet[f'{firstLetter}{j}'])
                            if(getMergedCellVal(sheet, sheet[f'{secondLetter}{j}'])==None):
                                print()
                            else:
                                teacherSecondGroup = getMergedCellVal(sheet, sheet[f'{secondLetter}{j}'])
                        else:
                            teacherOfBothGroups = getMergedCellVal(sheet, sheet[f'{firstLetter}{j}'])
                            # print("препод двух групп: "+teacherOfBothGroups)
                elif(j==startpos+2):
                    # print("Аудитория:")
                    if(getMergedCellVal(sheet, sheet[f'{firstLetter}{j}']) == None):
                        continue
                    else:
                        if(getMergedCellVal(sheet, sheet[f'{firstLetter}{j}'])!=getMergedCellVal(sheet, sheet[f'{secondLetter}{j}'])):
                            if(getMergedCellVal(sheet, sheet[f'{firstLetter}{j}'])==None):
                                print()
                            else:
                                audienceFirstGroup = getMergedCellVal(sheet, sheet[f'{firstLetter}{j}'])
                                # print("ауд 1 группы: "+audienceFirstGroup)

                            if(getMergedCellVal(sheet, sheet[f'{secondLetter}{j}'])==None):
                                print()
                            else:
                                audienceSecondGroup = getMergedCellVal(sheet, sheet[f'{secondLetter}{j}'])
                                # print("ауд 2 гр: "+audienceSecondGroup)
                        else:
                            audienceOfBothGroups = getMergedCellVal(sheet, sheet[f'{firstLetter}{j}'])
                            # print("аудитория двух групп: "+audienceOfBothGroups)
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
    for i in range(0, 7):
        checkDay(monday, "Понедельник", "1", i,groups[i], firstLetters[i], secondLetters[i])
        checkDay(tuesday, "Вторник", "2", i,groups[i],  firstLetters[i], secondLetters[i])
        checkDay(wednesday, "Среда", "3", i, groups[i], firstLetters[i], secondLetters[i])
        checkDay(thursday, "Четверг", "4", i,groups[i],  firstLetters[i], secondLetters[i])
        checkDay(friday, "Пятница", "5", i, groups[i], firstLetters[i], secondLetters[i])
        checkDay(saturday, "Суббота", "6", i,groups[i],  firstLetters[i], secondLetters[i])
        # checkDay(sunday, "Воскресенье", "7", i, groups[i], firstLetters[i], secondLetters[i])

def downloadHtml():
    url = "http://vsu.by/universitet/fakultety/matematiki-i-it/raspisanie.html"
    headers = {
        'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.9; rv:45.0) Gecko/20100101 Firefox/45.0'
    }
    try:
        r = requests.get(url, verify=False, headers=headers) # Получение страницы
        data = r.text
        open('schedule.html', 'w', encoding='utf-8').write(data) # Запись страницы в файл
        print("page downloaded...")
    except:
        print("Download failed, check URL.") 
        sys.exit()
    print("looking for schedule...")
    soup = BeautifulSoup(data, 'html.parser')
    link = "https://vsu.by"+soup.find('table', {'class': 'table-bordered'}).find('a').get("href") # поиск ссылки на файл
    try:
        savedlink = open("savedlink.txt").read()
        print("old link found...")
        print("comparision started...")
        if(savedlink == link):
            print("schedule is up to date")
            return None
        else:
            # open("savedlink.txt", 'w').write(link)
            print("starting update...")
            downloadXls(link)
    except:
        # open("savedlink.txt", 'w').write(link)
        print("starting update...")
        downloadXls(link)



while(True):
    print("trying to download html page...")
    downloadHtml()
    time.sleep(3600)


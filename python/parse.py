import requests
import time
from bs4 import BeautifulSoup
import mysql.connector
import openpyxl
import xlrd
import pyexcel
import pandas
import subprocess

def downloadXls(url):
    r = requests.get(url, verify=False)
    open("table.xls", 'wb').write(r.content)

def getMergedCellVal(sheet, cell):
    rng = [s for s in sheet.merged_cells.ranges if cell.coordinate in s]
    return sheet.cell(rng[0].min_row, rng[0].min_col).value if len(rng)!=0 else cell.value

def testMysql():
    connect = mysql.connector.connect(host="localhost", user="root", password="Rostik3015", database="stdtest")
    cursor = connect.cursor()
    bashcmd = "libreoffice --convert-to xlsx table.xls --headless"
    process = subprocess.Popen(bashcmd.split(), stdout=subprocess.PIPE)
    output, error = process.communicate()

    wb = openpyxl.load_workbook("table.xlsx")
    sheet = wb.active
    # print(sheet[f'N16'].value)
    cursor.execute("""TRUNCATE schedule""")

    startfrom = 0
    def checkDay(start, dayname, day_number):
        print("ДЕНЬ НАЧИНАЕТСЯ С"+str(start)+"СТРОКИ")
        startpos = start
        print(dayname)
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
                if(j==startpos):
                    # print("Название предмета: ")
                    if(getMergedCellVal(sheet, sheet[f'N{j}']) == None):
                        continue
                    else:
                        subjectName = getMergedCellVal(sheet, sheet[f'N{j}'])
                        # print(subjectName)
                elif(j==startpos+1):
                    # print("Преподаватель: ")
                    if(getMergedCellVal(sheet, sheet[f'N{j}']) == None):
                        continue
                    else:
                        if(getMergedCellVal(sheet, sheet[f'N{j}'])!=getMergedCellVal(sheet, sheet[f'O{j}'])):
                            if(getMergedCellVal(sheet, sheet[f'N{j}'])==None):
                                print()
                            else:
                                teacherFirstGroup = getMergedCellVal(sheet, sheet[f'N{j}'])
                                # print("First group: "+teacherFirstGroup)
                            if(getMergedCellVal(sheet, sheet[f'O{j}'])==None):
                                print()
                            else:
                                teacherSecondGroup = getMergedCellVal(sheet, sheet[f'O{j}'])
                                # print("Second group: "+teacherSecondGroup)
                        else:
                            teacherOfBothGroups = getMergedCellVal(sheet, sheet[f'N{j}'])
                            # print("препод двух групп: "+teacherOfBothGroups)
                elif(j==startpos+2):
                    # print("Аудитория:")
                    if(getMergedCellVal(sheet, sheet[f'N{j}']) == None):
                        continue
                    else:
                        if(getMergedCellVal(sheet, sheet[f'N{j}'])!=getMergedCellVal(sheet, sheet[f'O{j}'])):
                            if(getMergedCellVal(sheet, sheet[f'N{j}'])==None):
                                print()
                            else:
                                audienceFirstGroup = getMergedCellVal(sheet, sheet[f'N{j}'])
                                # print("ауд 1 группы: "+audienceFirstGroup)

                            if(getMergedCellVal(sheet, sheet[f'O{j}'])==None):
                                print()
                            else:
                                audienceSecondGroup = getMergedCellVal(sheet, sheet[f'O{j}'])
                                # print("ауд 2 гр: "+audienceSecondGroup)
                        else:
                            audienceOfBothGroups = getMergedCellVal(sheet, sheet[f'N{j}'])
                            # print("аудитория двух групп: "+audienceOfBothGroups)
            if(teacherFirstGroup != "" or teacherSecondGroup != "" or audienceFirstGroup != "" or audienceSecondGroup != ""):
                try:
                    cursor.execute("""INSERT INTO `schedule` (id, lesson_number, audience, group_id, day_number, subject, subgroup_id, teacher) VALUES (NULL, '"""+str(i)+"""', '"""+str(audienceFirstGroup)+"""', '1', '"""+str(day_number)+"""', '"""+subjectName+"""', '1', '"""+teacherFirstGroup+"""');""")
                    cursor.execute("""INSERT INTO `schedule` (id, lesson_number, audience, group_id, day_number, subject, subgroup_id, teacher) VALUES (NULL, '"""+str(i)+"""', '"""+str(audienceSecondGroup)+"""', '1', '"""+str(day_number)+"""', '"""+subjectName+"""', '2', '"""+teacherSecondGroup+"""');""")
                    print("""INSERT INTO `schedule` (id, lesson_number, audience, group_id, day_number, subject, subgroup_id, teacher) VALUES (NULL, '"""+str(i)+"""', '"""+str(audienceFirstGroup)+"""', '1', '"""+str(day_number)+"""', '"""+subjectName+"""', '1', '"""+teacherFirstGroup+"""');""")
                    print("""INSERT INTO `schedule` (id, lesson_number, audience, group_id, day_number, subject, subgroup_id, teacher) VALUES (NULL, '"""+str(i)+"""', '"""+str(audienceSecondGroup)+"""', '1', '"""+str(day_number)+"""', '"""+subjectName+"""', '2', '"""+teacherSecondGroup+"""');""")
                    connect.commit()

                except mysql.connector.Error as err:
                    print("Something went wrong: {}".format(err))

            elif(teacherOfBothGroups != "" or audienceOfBothGroups != ""):
                try:
                    cursor.execute("""INSERT INTO `schedule` (id, lesson_number, audience, group_id, day_number, subject, subgroup_id, teacher) VALUES (NULL, '"""+str(i)+"""', '"""+str(audienceOfBothGroups)+"""', '1', '"""+str(day_number)+"""', '"""+subjectName+"""', NULL, '"""+teacherOfBothGroups+"""');""")
                    connect.commit()
                except mysql.connector.Error as err:
                    print("Something went wrong: {}".format(err))


                
            startpos = startpos+3
        print("\n")
    # def checkDay(start):
    #     for i in range(start, start+23):
    #         if(getMergedCellVal(sheet, sheet[f'N{i}']) == None):
    #             continue
    #         else:
    #             if(getMergedCellVal(sheet, sheet[f'N{i}'])!=getMergedCellVal(sheet, sheet[f'O{i}'])):
    #                 if(getMergedCellVal(sheet, sheet[f'N{i}'])==None):
    #                     print()
    #                 else:
    #                     print("First group: "+getMergedCellVal(sheet, sheet[f'N{i}']))

    #                 if(getMergedCellVal(sheet, sheet[f'O{i}'])==None):
    #                     print()
    #                 else:
    #                     print("Second group: "+getMergedCellVal(sheet, sheet[f'O{i}']))
    #             else:
    #                 print(getMergedCellVal(sheet, sheet[f'N{i}']))

    for i in range(1,20):
        if(getMergedCellVal(sheet, sheet[f'N{i}']) == "14_1"):
            startfrom = i+1
            print(startfrom)
            print("FOUND start")
            break

    
    monday = startfrom
    tuesday = startfrom+27
    wednesday = tuesday+27
    thursday = wednesday+27
    friday = thursday+27
    saturday = friday+27
    sunday = saturday+27
    checkDay(monday, "Понедельник", "1")
    checkDay(tuesday, "Вторник", "2")
    checkDay(wednesday, "Среда", "3")
    checkDay(thursday, "Четверг", "4")
    checkDay(friday, "Пятница", "5")
    checkDay(saturday, "Суббота", "6")
    checkDay(sunday, "Воскресенье", "7")

    # checkDay(tuesday)
    # checkDay(wednesday)
    # checkDay(thursday)
    # checkDay(friday)
    # checkDay(saturday)
    # checkDay(sunday)


    # for i in range(startfrom, 180):
    #     monday = startfrom
    #     tuesday = startfrom+23
    #     wednesday = tuesday+23
    #     thursday = wednesday+23
    #     friday = thursday+23
    #     saturday = friday+23
    #     sunday = saturday+23
    #     if(getMergedCellVal(sheet, sheet[f'N{i}']) == None):
    #         continue
    #     else:
    #         if(getMergedCellVal(sheet, sheet[f'N{i}'])!=getMergedCellVal(sheet, sheet[f'O{i}'])):
    #             if(getMergedCellVal(sheet, sheet[f'N{i}'])==None):
    #                 print()
    #             else:
    #                 print("First group: "+getMergedCellVal(sheet, sheet[f'N{i}']))

    #             if(getMergedCellVal(sheet, sheet[f'O{i}'])==None):
    #                 print()
    #             else:
    #                 print("Second group: "+getMergedCellVal(sheet, sheet[f'O{i}']))
    #         else:
    #             print(getMergedCellVal(sheet, sheet[f'N{i}']))


    print("ASDASDASD")
    
# for i in range(2, 500002): #Читаем со 2-й строки (1-я заголовок)
#     nm = sheet[f'A{i}'].value #id
#     name = sheet[f'B{i}'].value #имя
#     fam = sheet[f'C{i}'].value #фамилия
#     otch = sheet[f'D{i}'].value #отчество
#     vod_pr = sheet[f'E{i}'].value #Водительские права(Есть/Нет)
#     sem_pol = sheet[f'F{i}'].value #Семейное положение(Да/Нет)
#     prof = sheet[f'G{i}'].value #Профессия


def downloadHtml():
    # url = "http://vsu.by/universitet/fakultety/matematiki-i-it/raspisanie.html"
    # headers = {
    #         'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.9; rv:45.0) Gecko/20100101 Firefox/45.0'
    #     }
    # r = requests.get(url, verify=False, headers=headers)
    # data = r.text
    # with open('test.html', 'w', encoding='utf-8') as output_file:
    #     output_file.write(data)
    # print("page downloaded...")
    # soup = BeautifulSoup(data)
    # table = soup.find('table', {'class': 'table-bordered'})
    # link = "https://vsu.by"+table.find('a').get("href")
    # print(link)
    # downloadXls(link)
    testMysql()

while(True):
    print("downloading html page...");
    downloadHtml();
    
    time.sleep(3600)


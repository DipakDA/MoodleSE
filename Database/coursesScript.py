import pandas as pd
import numpy as np

df = pd.read_csv("Timetable for First Semester 2018-19 (27 JULY 2018).csv")
#print(df.to_string())
#print(df.shape[0])

cols = ['num', 'title', 'credits']
lst = []

for index, row in df.iterrows():
    lst.append([row['COURSENO'], row['COURSETITLE'], row['CREDIT L P U'].split(" ")[-1]])
    #print index, type(row['COURSENO']), type(row['COURSETITLE']), type(row['CREDIT L P U'])

df_new = pd.DataFrame(lst, columns=cols)
df_new = df_new.drop_duplicates()

print(df_new.to_string())

df_new.to_csv("coursesAfterScript.csv")

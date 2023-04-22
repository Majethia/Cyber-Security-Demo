from django.http import JsonResponse
import sqlite3

def test(request):
    return JsonResponse({"Message":"Hello World"})


def login(request):
    connection = sqlite3.connect('db.sqlite3')
    cur = connection.cursor()
    query = f"""SELECT * FROM users WHERE (username="{request.GET.get('username')}") and (password="{request.GET.get('password')}")"""
    print(query)
    cur.execute(query)
    data = cur.fetchall()
    if len(data) != 0:
        return JsonResponse({"Message": f"Login Successfull", "uid": data[0][0], "username": data[0][1], "password": data[0][2], "is_superuser": data[0][3]})
    else:
        return JsonResponse({"Message": "Login Failed"})
    

def get_data(request):
    connection = sqlite3.connect('db.sqlite3')
    cur = connection.cursor()
    query = f'''SELECT * FROM users_data WHERE (uid="{request.GET.get('uid')}")'''
    cur.execute(query)
    data = cur.fetchall()
    query = f"SELECT username, is_superuser FROM users WHERE (uid='{request.GET.get('uid')}')"
    cur.execute(query)
    data1 = cur.fetchall()
    d = {"uid": data[0][0], "username": data1[0][0], "is_superuser": data1[0][1], "account_no": data[0][1], "sensetive_data": data[0][2]}

    return JsonResponse({"Message": "Data fetched Successfully", "Data": d})





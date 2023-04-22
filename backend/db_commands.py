import sqlite3

connection = sqlite3.connect('db.sqlite3')
cur = connection.cursor()
query = f"DROP TABLE users"
cur.execute(query)

query = f"CREATE TABLE users (uid int, username varchar(255), password varchar(255), is_superuser int)"
cur.execute(query)

query = f"INSERT INTO users (uid, username, password, is_superuser) VALUES (113231234, 'not_admin', 'abcdefg1234', 0)"
cur.execute(query)

query = f"INSERT INTO users (uid, username, password, is_superuser) VALUES (723235323, 'user1', 'password_1', 0)"
cur.execute(query)

query = f"INSERT INTO users (uid, username, password, is_superuser) VALUES (556533124, 'user2', 'dfsadadsgsd', 0)"
cur.execute(query)

query = f"INSERT INTO users (uid, username, password, is_superuser) VALUES (658567321, 'random user', 'sgdffhdgf', 0)"
cur.execute(query)

query = f"INSERT INTO users (uid, username, password, is_superuser) VALUES (225363123, 'admin', 'hard_to_crack_password', 1)"
cur.execute(query)

query = f"INSERT INTO users (uid, username, password, is_superuser) VALUES (313435353, 'attacking_user', 'attacking_password', 0)"
cur.execute(query)

query = f"INSERT INTO users (uid, username, password, is_superuser) VALUES (432123225, 'real_admin', 'even_hard_to_crack_password', 1)"
cur.execute(query)

query = f"DROP TABLE users_data"
cur.execute(query)

query = f"CREATE TABLE users_data (uid int, account_no varchar(255), sensetive_data varchar(255))"
cur.execute(query)

query = f"INSERT INTO users_data (uid, account_no, sensetive_data) VALUES (113231234, '12345', 'has 12 dogs')"
cur.execute(query)

query = f"INSERT INTO users_data (uid, account_no, sensetive_data) VALUES (723235323, '52534', 'sleeps for 2 days straight')"
cur.execute(query)

query = f"INSERT INTO users_data (uid, account_no, sensetive_data) VALUES (556533124, '35433', 'forgets his password often')"
cur.execute(query)

query = f"INSERT INTO users_data (uid, account_no, sensetive_data) VALUES (658567321, '43435', 'has identity crisis')"
cur.execute(query)

query = f"INSERT INTO users_data (uid, account_no, sensetive_data) VALUES (225363123, '23346', 'owns a nano')"
cur.execute(query)

query = f"INSERT INTO users_data (uid, account_no, sensetive_data) VALUES (313435353, '54321', 'example sensetive data')"
cur.execute(query)

query = f"INSERT INTO users_data (uid, account_no, sensetive_data) VALUES (432123225, '57962', 'alt account most probably')"
cur.execute(query)



connection.commit()
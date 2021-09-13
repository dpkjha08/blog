import psycopg2

#Establishing the connection
conn = psycopg2.connect(
   database="blog", user='postgres', password='postgres', host='127.0.0.1', port= '5432'
)
#Setting auto commit false
conn.autocommit = True

#Creating a cursor object using the cursor() method
cursor = conn.cursor()

# Preparing SQL queries to INSERT a record into the database.
cursor.execute('''INSERT INTO problems_on_trains(ques_default,question,option_a,option_b,option_c,option_d,correct,answer,date) 
VALUES ('pot','1] A 160 meters long train crosses a 160 meters long platform in 16 seconds. Find the speed of the train.',
'A] 80 kmph','B] 72 kmph','C] 70 kmph','D] 82 kmph',
'B',
'$$
\eqalign{
&\text{Distance covered in passing the platform} \cr
&= (160 + 160)m \cr
&= 320m \cr
&\therefore \text{Speed of train} \cr
&= \frac{320}{16}m/sec = 20 m/sec \cr
&= \left( 20 \times \frac{18}{5} \right)km/hr \cr
&= 72 km/hr
}
$$
',
'13 Sept, 2021')''')
# cursor.execute('''INSERT INTO EMPLOYEE(FIRST_NAME, LAST_NAME, AGE, SEX,
#    INCOME) VALUES ('Vinay', 'Battacharya', 20, 'M', 6000)''')
# cursor.execute('''INSERT INTO EMPLOYEE(FIRST_NAME, LAST_NAME, AGE, SEX,
#    INCOME) VALUES ('Sharukh', 'Sheik', 25, 'M', 8300)''')
# cursor.execute('''INSERT INTO EMPLOYEE(FIRST_NAME, LAST_NAME, AGE, SEX,
#    INCOME) VALUES ('Sarmista', 'Sharma', 26, 'F', 10000)''')
# cursor.execute('''INSERT INTO EMPLOYEE(FIRST_NAME, LAST_NAME, AGE, SEX,
#    INCOME) VALUES ('Tripthi', 'Mishra', 24, 'F', 6000)''')

# Commit your changes in the database
conn.commit()
print("Records inserted........")

# Closing the connection
conn.close()
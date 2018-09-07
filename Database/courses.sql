DROP TABLE IF EXISTS courses;
CREATE TABLE courses (
  num varchar(12) NOT NULL PRIMARY KEY,
  title varchar(50) NOT NULL,
  credits int NOT NULL
);

/*Remaining fields*/

/*
mid_sem_date DATETIME;
compre_date DATETIME;
ic VARCHAR(40) NOT NULL;
*/

/* Did this code to tranfer the contents of coursesAfterScript.csv to database */

/*
LOAD DATA LOCAL INFILE 'coursesAfterScript.csv' INTO TABLE courses
FIELDS TERMINATED BY ',' LINES TERMINATED BY '\n' IGNORE 1 LINES (num, title, credits);
*/

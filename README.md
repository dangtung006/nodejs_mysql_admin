Free Document And Source Code;

Install Mysql server on Ubuntu : https://www.digitalocean.com/community/tutorials/how-to-install-mysql-on-ubuntu-18-04

1.
    Installing MySQL
        sudo apt update
        sudo apt install mysql-server
        sudo mysql_secure_installation

2.
    Configuring MySQL
        sudo mysql_secure_installation

3.
    (Optional)Adjusting User Authentication and Privileges
        sudo mysql
        SELECT user,authentication_string,plugin,host FROM mysql.user;
        ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'password';
        FLUSH PRIVILEGES;
        SELECT user,authentication_string,plugin,host FROM mysql.user;

Command Line work with Mysql server :
    Connect :
        mysql -u root -p

    Database:
        CREATE DATABASE db_name;
        show databases;
        USE db_name;
        DROP DATABASE db_name;

    Tables : 

        SHOW TABLES;
        SHOW FULL TABLES;
        SHOW TABLES FROM database_name;
        SHOW TABLES LIKE pattern;

        DESCRIBE table_name;
        DROP TABLE table_name;


Setup Module sequelize to connect to Mysql in Nodejs :
    npm install --save mysql2
    npm install --save sequelize

Note : document https://sequelize.org/docs/v6/getting-started/


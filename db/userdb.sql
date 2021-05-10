CREATE DATABASE usersData;
use usersData;

CREATE TABLE IF NOT EXISTS tblUsersImport (
    `id` int AUTO_INCREMENT,
    `fName` VARCHAR(21) CHARACTER SET utf8,
    `lName` VARCHAR(21) CHARACTER SET utf8,
    `username` VARCHAR(30) CHARACTER SET utf8,
    `password` VARCHAR(50) CHARACTER SET utf8,
    `email` VARCHAR(100) CHARACTER SET utf8,
    PRIMARY KEY (`id`)
    );
INSERT INTO tblUsersImport (fName,lName,username,password,email) VALUES
('Gabriela', 'Saboia', 'GSaboia', '123456', 'g@gmail.com');

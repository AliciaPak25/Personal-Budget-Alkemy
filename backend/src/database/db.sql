CREATE DATABASE budget;

USE budget;

-- USERS TABLE
CREATE TABLE users(
    id INT NOT NULL,
    email VARCHAR(45) NOT NULL,
    password VARCHAR(60) NOT NULL,
    fullname VARCHAR(100) NULL
);

ALTER TABLE users
    ADD PRIMARY KEY (id);

ALTER TABLE users
    MODIFY id INT NOT NULL AUTO_INCREMENT;

DESCRIBE users;

-- RECORDS TABLE
CREATE TABLE records (
    id INT NOT NULL,
    concept VARCHAR(150) NOT NULL,
    amount  FLOAT NOT NULL,
    dateOfRecord DATE NOT NULL,
    typeOfRecord TINYINT NOT NULL,
    category VARCHAR(45),
    user_id INT,
    created_at timestamp DEFAULT current_timestamp,
    CONSTRAINT fk_user FOREIGN KEY (user_id) REFERENCES users(id)
);

ALTER TABLE records
    ADD PRIMARY KEY (id);

ALTER TABLE records
    MODIFY id INT NOT NULL AUTO_INCREMENT;

DESCRIBE records;
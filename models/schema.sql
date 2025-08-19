-- this is the mysql code used to create the database. it was never run in this project folder

DROP DATABASE IF EXISTS careerchaindb;

CREATE DATABASE IF NOT EXISTS careerchaindb;

USE careerchaindb;

CREATE TABLE IF NOT EXISTS users (
    id INT(50) AUTO_INCREMENT, 
    username VARCHAR(50) UNIQUE, 
    walletAddress VARCHAR(50) UNIQUE,
    contractAddress VARCHAR(50),
    hashedPassword VARCHAR(100), 
    bio VARCHAR(500), 
    pfp VARCHAR(50),
    PRIMARY KEY(id)
);

CREATE TABLE IF NOT EXISTS posts (
    id INT(50) AUTO_INCREMENT, 
    postText VARCHAR(500), 
    posterId INT(50),
	dateOfUpload VARCHAR(50), 
    likes INT(50),
    PRIMARY KEY(id),
    FOREIGN KEY (posterId) REFERENCES users(id)
);

CREATE TABLE IF NOT EXISTS likes (
	userId INT(50),
    postId INT(50),
    UNIQUE(userId, postId)
);
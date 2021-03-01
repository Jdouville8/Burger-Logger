DROP DATABASE IF EXISTS burgers_db;

-- Create burgers_db
CREATE DATABASE burgers_db;
-- USE burger_db
USE burgers_db;
-- Create burgers table with field: id (Int), burger_name (string), devoured (boolean)
CREATE TABLE burgers (
  id INTEGER NOT NULL AUTO_INCREMENT,
  burger_name VARCHAR(100) NOT NULL,
  devoured BOOLEAN,
  PRIMARY KEY (id)
);

SELECT * FROM burgers;
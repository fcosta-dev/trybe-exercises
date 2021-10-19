DROP SCHEMA IF EXISTS Zoologico;
CREATE SCHEMA Zoologico;
USE Zoologico;

CREATE TABLE animal(
  animal_id INT PRIMARY KEY AUTO_INCREMENT,
  nome VARCHAR(45) NOT NULL,
  especie VARCHAR(45) NOT NULL,
  sexo VARCHAR(45) NOT NULL,
  idade INT NOT NULL,
  localizacao VARCHAR(45) NOT NULL
);

CREATE TABLE gerente(
  gerente_id INT PRIMARY KEY AUTO_INCREMENT,
  nome VARCHAR(45) NOT NULL
);

CREATE TABLE cuidador(
  cuidador_id INT PRIMARY KEY AUTO_INCREMENT,
  nome VARCHAR(45) NOT NULL,
  gerente_id INT NOT NULL,
  FOREIGN KEY (gerente_id) REFERENCES gerente (gerente_id)
);

CREATE TABLE animal_cuidador(
  animal_id INT NOT NULL,
  cuidador_id INT NOT NULL,
  CONSTRAINT PRIMARY KEY(animal_id, cuidador_id),
  FOREIGN KEY (animal_id) REFERENCES animal (animal_id),
  FOREIGN KEY (cuidador_id) REFERENCES cuidador (cuidador_id)
);

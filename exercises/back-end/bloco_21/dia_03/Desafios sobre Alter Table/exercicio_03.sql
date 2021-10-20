-- Escreva uma query SQL para alterar o nome da coluna country_name para country , mantendo o mesmo tipo e tamanho de dados.
ALTER TABLE locations CHANGE COLUMN country_name country VARCHAR(40);
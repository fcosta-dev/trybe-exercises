-- Escreva uma query SQL para alterar o nome da coluna region_name para region , mantendo o mesmo tipo e tamanho de dados.
ALTER TABLE locations CHANGE COLUMN region_name region VARCHAR(25);

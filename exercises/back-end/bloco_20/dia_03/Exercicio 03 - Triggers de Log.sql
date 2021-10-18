-- Crie um Trigger na tabela movies que, ao ter algum de seus registros excluídos, deve enviar uma informação para a 
-- tabela movies_logs , onde deve ser guardada a data da exclusão, a executed_action 'DELETE' e o id do filme excluído.
USE BeeMovies;
DELIMITER $$

CREATE TRIGGER trigger_movie_delete
	BEFORE DELETE ON movies
    FOR EACH ROW
BEGIN
	INSERT INTO movies_logs(movie_id, executed_action, log_date)
    VALUES(OLD.movie_id, 'DELETE', NOW());
END $$

DELIMITER ;

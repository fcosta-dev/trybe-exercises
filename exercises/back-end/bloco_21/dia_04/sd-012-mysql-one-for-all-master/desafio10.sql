DELIMITER $$

CREATE FUNCTION quantidade_musicas_no_historico(user_id INT)
RETURNS INT READS SQL DATA
BEGIN
  RETURN (
    SELECT
      COUNT(*)
    FROM
      SpotifyClone.history AS h
    WHERE h.user_id = user_id
  );
END $$

DELIMITER ;
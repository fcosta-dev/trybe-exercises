DELIMITER $$

CREATE PROCEDURE albuns_do_artista(IN artist_name VARCHAR(100))
BEGIN
  SELECT
    a.name AS artista,
    ab.title AS album
  FROM
    SpotifyClone.artists AS a
  INNER JOIN SpotifyClone.albums AS ab
    ON ab.artist_id = a.artist_id
  WHERE a.name = artist_name;
END $$

DELIMITER ;
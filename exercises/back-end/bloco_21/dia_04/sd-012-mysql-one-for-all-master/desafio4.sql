CREATE VIEW top_3_artistas AS
  SELECT
    a.name AS artista,
    COUNT(us.user_id) AS seguidores
  FROM
    SpotifyClone.artists AS a
  INNER JOIN
    SpotifyClone.users_artists AS us 
      ON us.artist_id = a.artist_id
  GROUP BY artista
  ORDER BY seguidores DESC, artista ASC
  LIMIT 3;

CREATE VIEW perfil_artistas AS
  SELECT
    a.name AS artista,
    ab.title AS album,
    COUNT(ua.user_id) AS seguidores
  FROM
    SpotifyClone.artists AS a
  INNER JOIN SpotifyClone.albums AS ab
    ON ab.artist_id = a.artist_id
  INNER JOIN SpotifyClone.users_artists AS ua 
    ON ua.artist_id = a.artist_id
  GROUP BY artista, album
  ORDER BY seguidores DESC, artista ASC, album ASC;
  
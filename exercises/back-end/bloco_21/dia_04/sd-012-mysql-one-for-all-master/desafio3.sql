CREATE VIEW historico_reproducao_usuarios AS
  SELECT
    u.name AS usuario,
    s.title AS nome
  FROM
    SpotifyClone.users AS u
  INNER JOIN SpotifyClone.history AS h
    ON u.user_id = h.user_id
  INNER JOIN SpotifyClone.songs AS s
    ON s.song_id = h.song_id
  ORDER BY usuario ASC, nome ASC;
  
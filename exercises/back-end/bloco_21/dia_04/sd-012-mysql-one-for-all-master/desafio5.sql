
CREATE VIEW top_2_hits_do_momento AS
  SELECT
    s.title AS cancao,
    COUNT(s.song_id) AS reproducoes
  FROM
    SpotifyClone.songs AS s
  INNER JOIN SpotifyClone.history AS h
    ON h.song_id = s.song_id
  GROUP BY cancao
  ORDER BY reproducoes DESC, cancao ASC
  LIMIT 2;
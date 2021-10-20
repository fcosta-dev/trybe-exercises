CREATE VIEW cancoes_premium AS
  SELECT
    s.title AS nome,
    COUNT(h.song_id) AS reproducoes
  FROM
    SpotifyClone.songs AS s
  INNER JOIN SpotifyClone.history AS h
    ON h.song_id = s.song_id
  INNER JOIN SpotifyClone.users AS u
    ON u.user_id = h.user_id
  INNER JOIN SpotifyClone.plans AS p
    ON p.plan_id = u.plan_id
  WHERE p.name IN ('universitário', 'familiar')
  GROUP BY s.title
  ORDER BY s.title ASC;
  
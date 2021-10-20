CREATE VIEW faturamento_atual AS
  SELECT
    ROUND(MIN(value), 2) AS faturamento_minimo,
    ROUND(MAX(value), 2) AS faturamento_maximo,
    ROUND(AVG(value), 2) AS faturamento_medio,
    ROUND(SUM(value), 2) AS faturamento_total
  FROM
    SpotifyClone.plans AS p
  INNER JOIN SpotifyClone.users AS u
    ON u.plan_id = p.plan_id;
    
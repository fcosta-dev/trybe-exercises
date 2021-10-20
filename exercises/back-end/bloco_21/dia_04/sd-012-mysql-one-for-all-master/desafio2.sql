CREATE VIEW estatisticas_musicais AS
  SELECT
    (SELECT COUNT(*) from SpotifyClone.songs) AS 'cancoes',
    (SELECT COUNT(*) from SpotifyClone.artists) AS 'artistas',
    (SELECT COUNT(*) from SpotifyClone.albums) AS 'albuns';

DELIMITER $$

CREATE TRIGGER trigger_usuario_delete
  BEFORE DELETE ON SpotifyClone.users
  FOR EACH ROW
BEGIN
  DELETE FROM SpotifyClone.history
  WHERE user_id = OLD.user_id;
  DELETE FROM SpotifyClone.users_artists
  WHERE user_id = OLD.user_id;
END $$

DELIMITER ;
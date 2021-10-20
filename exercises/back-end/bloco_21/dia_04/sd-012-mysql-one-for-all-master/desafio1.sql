DROP DATABASE IF EXISTS SpotifyClone;
CREATE DATABASE SpotifyClone;

USE SpotifyClone;

CREATE TABLE artists(
    artist_id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(60) NOT NULL
);

CREATE TABLE plans(
    plan_id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(100) NOT NULL,
    value DECIMAL(19,4) NOT NULL
);

CREATE TABLE albums(
    album_id INT PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(100) NOT NULL,
    artist_id INT NOT NULL,
    FOREIGN KEY (artist_id) REFERENCES artists(artist_id)
);

CREATE TABLE songs(
    song_id INT PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(100) NOT NULL,
    album_id INT NOT NULL,
    FOREIGN KEY (album_id) REFERENCES albums(album_id)
);

CREATE TABLE users(
    user_id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(60) NOT NULL,
    age INT NOT NULL,
    plan_id INT NOT NULL,
    FOREIGN KEY (plan_id) REFERENCES plans(plan_id)
);

CREATE TABLE history(
    user_id INT NOT NULL,
    song_id INT NOT NULL,
    FOREIGN KEY (user_id) REFERENCES users(user_id),
    FOREIGN KEY (song_id) REFERENCES songs(song_id),
    CONSTRAINT PRIMARY KEY (user_id, song_id)
);

CREATE TABLE users_artists(
    user_id INT NOT NULL,
    artist_id INT NOT NULL,
    FOREIGN KEY (user_id) REFERENCES users(user_id),
    FOREIGN KEY (artist_id) REFERENCES artists(artist_id),
    CONSTRAINT PRIMARY KEY (user_id, artist_id)
);

INSERT INTO artists(name)
VALUES ('Walter Phoenix'),
        ('Peter Strong'),
        ('Lance Day'),
        ('Freedie Shannon');

INSERT INTO plans(name, value)
VALUES ('gratuito', 0),
        ('universitário', 5.99),
        ('familiar', 7.99);

INSERT INTO albums(title, artist_id)
VALUES ('Envious', 1),
        ('Exuberant', 1),
        ('Hallowed Steam', 2),
        ('Incandescent', 3),
        ('Temporary Culture', 4);

INSERT INTO songs(title, album_id)
VALUES ('Soul For Us', 1),
        ('Reflections Of Magic', 1),
        ('Dance With Her Own', 1),
        ('Troubles Of My Inner Fire', 2),
        ('Time Fireworks', 2),
        ('Magic Circus', 3),
        ('Honey, So Do I', 3),
        ('Sweetie, Let\'s Go Wild', 3),
        ('She Knows', 3),
        ('Fantasy For Me', 4),
        ('Celebration Of More', 4),
        ('Rock His Everything', 4),
        ('Home Forever', 4),
        ('Diamond Power', 4),
        ('Honey, Let\'s Be Silly', 4),
        ('Thang Of Thunder', 5),
        ('Words Of Her Life', 5),
        ('Without My Streets', 5);

INSERT INTO users(name, age, plan_id)
VALUES ('Thati', 23, 1),
        ('Cintia', 35, 3),
        ('Bill', 20, 2),
        ('Roger', 45, 1);

INSERT INTO users_artists(user_id, artist_id)
VALUES (1, 1),
        (1, 4),
        (1, 3),
        (2, 1),
        (2, 3),
        (3, 2),
        (3, 1),
        (4, 4);

INSERT INTO history(user_id, song_id)
VALUES (1, 1),
        (1, 6),
        (1, 14),
        (1, 16),
        (2, 13),
        (2, 17),
        (2, 2),
        (2, 15),
        (3, 4),
        (3, 16),
        (3, 6),
        (4, 3),
        (4, 18),
        (4, 11);
        
CREATE TABLE artist(
	id SERIAL PRIMARY KEY,
	name VARCHAR(50),
	genre VARCHAR(50)
);

INSERT INTO artist(name, genre) VALUES
('Playboi Carti', 'Rap'),
('Amelie Lens', 'Industrial Techno'),
('Daft Punk', 'French House'),
('Michael Jackson', 'Pop'),
('Van Halen', 'Glam Rock'),
('Mayhem', 'Black Metal'),
('Machine Girl', 'Breakcore'),
('Summrs', 'Pluggnb');

SELECT * FROM artist;
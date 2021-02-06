INSERT INTO album (album_name, band_name, slug, link) VALUES
('Dark Side of the Moon', 'Pink Floyd', 'dark_side_of_the_moon', 'https://en.wikipedia.org/wiki/The_Dark_Side_of_the_Moon'),
('Appetite for Destruction', 'Guns N Roses', 'appetite_for_destruction', 'https://en.wikipedia.org/wiki/Appetite_for_Destruction'),
('Back in Black', 'AC/DC', 'back_in_black', 'https://en.wikipedia.org/wiki/Back_in_Black'),
('Master of Puppets', 'Metallica', 'master_of_puppets', 'https://en.wikipedia.org/wiki/Master_of_Puppets'),
('IV', 'Led Zeppelin', 'iv', 'https://en.wikipedia.org/wiki/Led_Zeppelin_IV'),
('A Night at the Opera', 'Queen', 'a_night_at_the_opera', 'https://en.wikipedia.org/wiki/A_Night_at_the_Opera_(Queen_album)'),
('Rubber Soul', 'The Beatles', 'rubber_soul','https://en.wikipedia.org/wiki/Rubber_Soul'),
('Powerage', 'AC/DC', 'powerage','https://en.wikipedia.org/wiki/Powerage'),
('Pet Sounds', 'The Beach Boys', 'pet_sounds','https://en.wikipedia.org/wiki/Pet_Sounds'),
('Physical Graffiti', 'Led Zeppelin', 'physical_graffiti','https://en.wikipedia.org/wiki/Physical_Graffiti');

INSERT INTO user_info (username, email) VALUES
('f_mercury', 'f_mercury@gmail.com');

INSERT INTO review (stars, review_message, album_reference, user_reference) VALUES
('5', 'Simply smashing!', 6, 1),
('1', 'Rather elementary if you ask me.', 9, 1);
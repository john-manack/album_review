CREATE TABLE album (
    id SERIAL PRIMARY KEY,
    album_name text NOT NULL,
    band_name text NOT NULL,
    slug text NOT NULL,
    link text NOT NULL,
    cover text NOT NULL
);

CREATE TABLE user_info (
    id SERIAL PRIMARY KEY,
    first_name text NOT NULL,
    last_name text NOT NULL,
    email text NOT NULL,
    password varchar(2000) NOT NULL
);

CREATE TABLE review (
    id SERIAL PRIMARY KEY,
    stars integer NOT NULL,
    review_message text NOT NULL,
    album_reference integer REFERENCES album (id),
    user_reference integer REFERENCES user_info (id)
);
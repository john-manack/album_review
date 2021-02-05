CREATE TABLE album (
    id SERIAL PRIMARY KEY,
    album_name text NOT NULL,
    band_name text NOT NULL,
    link text NOT NULL,
    blerb text NOT NULL
);

CREATE TABLE user {
    id SERIAL PRIMARY KEY,
    username text NOT NULL,
    email text NOT NULL
}

CREATE TABLE review (
    id SERIAL PRIMARY KEY,
    stars integer NOT NULL,
    review_messsage text NOT NULL,
    album_reference integer NOT NULL,
    user_reference integer NOT NULL
);
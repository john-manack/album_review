CREATE TABLE bands (
    id SERIAL PRIMARY KEY,
    band text NOT NULL,
    rank_id integer NOT NULL
);

CREATE TABLE ranking_scale (
    id SERIAL PRIMARY KEY,
    ranking_title text NOT NULL,
    ranking_value text NOT NULL
)
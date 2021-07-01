CREATE TABLE users (
    id          SERIAL PRIMARY KEY,
    password    TEXT NOT NULL,
    username    TEXT NOT NULL UNIQUE,
    first_name  TEXT NOT NULL,
    last_name   TEXT NOT NULL,
    email       TEXT NOT NULL UNIQUE CHECK (POSITION('@' IN email) > 1),
    created_at  TIMESTAMP NOT NULL DEFAULT NOW()
);

CREATE TABLE loglines (
    id          SERIAL PRIMARY KEY,
    user_id     INTEGER NOT NULL,
    title       TEXT NOT NULL,
    protagonist TEXT NOT NULL,
    incident    TEXT NOT NULL,
    goal        TEXT NOT NULL,
    conflict    TEXT NOT NULL,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);

CREATE TABLE ideas (
    id          SERIAL PRIMARY KEY,
    user_id     INTEGER NOT NULL,
    project     TEXT NOT NULL,
    title       TEXT NOT NULL UNIQUE,
    category    TEXT NOT NULL,
    info        TEXT NOT NULL,
    resources   TEXT NOT NULL,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);
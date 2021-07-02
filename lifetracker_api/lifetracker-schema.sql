CREATE TABLE users (
    id          SERIAL PRIMARY KEY,
    password    TEXT NOT NULL,
    username    TEXT NOT NULL UNIQUE,
    first_name  TEXT NOT NULL,
    last_name   TEXT NOT NULL,
    email       TEXT NOT NULL UNIQUE CHECK (POSITION('@' IN email) > 1),
    is_admin    BOOLEAN NOT NULL DEFAULT FALSE,
    created_at  TIMESTAMP NOT NULL DEFAULT NOW()
);

CREATE TABLE loglines (
    id          SERIAL PRIMARY KEY,
    title       TEXT NOT NULL,
    protagonist TEXT NOT NULL,
    incident    TEXT NOT NULL,
    goal        TEXT NOT NULL,
    conflict    TEXT NOT NULL,
    user_id     INTEGER NOT NULL,
    created_at  TIMESTAMP NOT NULL DEFAULT NOW(),
    updated_at  TIMESTAMP NOT NULL DEFAULT NOW(),
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);

CREATE TABLE ideas (
    id          SERIAL PRIMARY KEY,
    project     TEXT NOT NULL,
    title       TEXT NOT NULL,
    category    TEXT NOT NULL,
    info        TEXT NOT NULL,
    resources   TEXT NOT NULL,
    user_id     INTEGER NOT NULL,
    created_at  TIMESTAMP NOT NULL DEFAULT NOW(),
    updated_at  TIMESTAMP NOT NULL DEFAULT NOW(),
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);

CREATE TABLE progress (
    id          SERIAL PRIMARY KEY,
    fecha       TEXT NOT NULL,
    title       TEXT NOT NULL,
    priority    TEXT NOT NULL,
    stat        TEXT NOT NULL,
    descrip     TEXT NOT NULL,
    resources   TEXT NOT NULL,
    user_id     INTEGER NOT NULL,
    created_at  TIMESTAMP NOT NULL DEFAULT NOW(),
    updated_at  TIMESTAMP NOT NULL DEFAULT NOW(),
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);
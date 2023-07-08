
CREATE TABLE users (
  id         SERIAL PRIMARY KEY,
  --username   TEXT NOT NULL,
  password   TEXT NOT NULL,
  first_name TEXT NOT NULL,
  last_name  TEXT NOT NULL,
  email      TEXT NOT NULL UNIQUE CHECK (position('@' IN email) > 1),
  created_at TIMESTAMP NOT NULL DEFAULT NOW()
);

CREATE TABLE nutrition (
  id            SERIAL PRIMARY KEY,
  name          TEXT NOT NULL,
  category      TEXT NOT NULL,
  quantity      INTEGER,
  calories      INTEGER,
  image_url     TEXT,
  user_id       INTEGER REFERENCES users(id) ON DELETE CASCADE,
  created_at    TIMESTAMP NOT NULL DEFAULT NOW()   
);
\echo 'Delete and recreate lifetracker db?'
\prompt 'Return for yes or control-C to cancel > ' foo

DROP DATABASE lifetracker_test;
CREATE DATABASE lifetracker_test;
\connect lifetracker_test

\i lifetracker-schema.sql
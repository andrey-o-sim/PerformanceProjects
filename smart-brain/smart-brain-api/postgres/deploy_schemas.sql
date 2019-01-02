-- Deploy fresh DB tables
\i '/docker-entry-initdb.d/tables/users.sql'
\i '/docker-entry-initdb.d/tables/login.sql'

\i '/docker-entry-initdb.d/seed/seed.sql'
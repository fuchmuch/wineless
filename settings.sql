-- settings.sql
CREATE DATABASE wineless;
CREATE USER winelessuser WITH PASSWORD 'wineless';
GRANT ALL PRIVILEGES ON DATABASE wineless TO winelessuser;
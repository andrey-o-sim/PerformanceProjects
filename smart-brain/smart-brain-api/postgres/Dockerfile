FROM postgres:10.3

ADD /tables/ /docker-entry-initdb.d/tables/
ADD /seed/ /docker-entry-initdb.d/seed/
ADD deploy_schemas.sql /docker-entry-initdb.d/tables/
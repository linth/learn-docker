# Postgres

## docker-compose.yml
```
version: "3.7"
services:
    db:
        image: postgres:13.2-alpine
        restart: always
        environment:
            POSTGRES_DB: postgres
            POSTGRES_USER: $USER_NAME #postgres
            POSTGRES_PASSWORD: $PASSWORD #1234
            PGDATA: /var/lib/postgresql/data
        volumes:
            - db-data:/var/lib/postgresql/data
        ports:
            - "5432:5432"
    pgadmin:
        image: dpage/pgadmin4:latest
        restart: always
        environment:
            PGADMIN_DEFAULT_EMAIL: $USER_EMAIL #xxx@gmail
            PGADMIN_DEFAULT_PASSWORD: $PASSWORD #abcd
            PGADMIN_LISTEN_PORT: 80
        ports:
            - "8080:80"
        volumes:
            - pgadmin-data:/var/lib/pgadmin
        links:
            - "db:pgsql-server"
volumes:
    db-data:
    pgadmin-data:
```

# Reference
- [Docker-compose創建PostgreSQL](https://cde566.medium.com/docker-compose%E5%89%B5%E5%BB%BApostgresql-7f3f9519fa20)
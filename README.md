# backend
Backend


To build:
```
$ docker build -t db/api .
```

To run:
```
$ docker run -p 3145:3145 --rm -it --name db-backend --link some-mysql:some-mysql db/api
```

To run with hot reload:
```
$ docker run -p 3145:3145 --rm -it --name db-backend -v $(pwd)/src:/usr/src/app/src --link some-mysql:some-mysql db/api
```

To run with docker-compose ddl, remove `--link some-mysql:mysql ` and replace with `--net ddl_default` option instead (or other corresponding docker network names).
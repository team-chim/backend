# Backend

Backend for the 2110422 Database Management Systems Project.

# Usage Instructions

## With `docker`
To build:
```
$ docker build -t db/api .
```
The name of the container is chosen to be `db/api`; this can be changed to any name of your preference, but it must match the `docker run` command.


To run:
```
$ docker run -p 3145:3145 --rm -it --name db-backend --link some-mysql:some-mysql db/api
```
This command exposes port 3145 to the host machine and also removes itself after the run has completed (or interrupted).

### Additional Features

To run with __hot reload__:
```
$ docker run -p 3145:3145 --rm -it --name db-backend -v $(pwd)/src:/usr/src/app/src --link some-mysql:some-mysql db/api
```

To run with __`docker-compose`-ed ddl__, remove `--link some-mysql:mysql ` and replace with `--net ddl_default` option instead (or other corresponding docker network names).

## With `docker-compose`


To run with docker-compose:
```
$ docker-compose up
```


# Project Structure

## Root Structure 

This section describes the directory structure of the root folder, the folder you will find on opening the project. Most of the code will be kept in the `src` folder.

```
/
├── docker-compose.yml
├── Dockerfile
├── node_modules          
├── package.json
├── README.md
└── src                      
    ├── app.js
    ├── config
    ├── controllers
    ├── database.js
    ├── main
    ├── public
    ├── queries
    ├── routes
    ├── server.js
    └── tests
```

- `src`: contains all the source files (files in this folder will be watched by hot reloader)
- `src/app.js`: The `expressjs` application. Imported by `server.js`
- `src/config`: contains all global configuration files
- `src/controllers`: Controllers that cannot be catagorized yet. Should contain minimal number of files.
- `src/database.js`: Provides connection to the database for the whole project
- `src/main`: Contains the main logic of the application
- `src/public`: Contains files that will be available publicly
- `src/queries`: Contains all SQL queries that are kept as SQL files. This is kept separate from the main folder because one SQL file may be used by multiple components.
- `src/routes`: Contains the main router(s). Multiple versions of the API are kept in this folder, if they exist.
- `src/server.js`: Contains the server file. This will be ran on `npm start`
- `src/tests`: Contains tests that don't belong to any particular package.


## Main Structure

This section describes the __main__ folder (`src/main`). This folder contains subdirectories divided by their function, into _'packages'_. 

```
src/main
├── academic
├── company
├── faculty
├── faculty_group
├── offer
├── student
├── subject
└── teacher
```

Each of the folder (package) will be structured as described in the __Package Structure__ section.

## Package Structure
```
src/main/academic
├── controllers
├── routers
└── tests
```

- `routers`: Contains the router
- `controllers`: Contains the application logic. Each file in this folder should correspond to only one route in the routers (Although exceptions can be made if the routes are similar to each other).
- `tests`: Contains the test to be run by `jest`. Test files should be of the form `*.test.js`


# Development Instructions

## To add a new feature

  1a. _(Optional)_ Add the SQL query in the `src/queries` folder. Numbering is only meant to group similar functions together and can be chosen arbitrarily.  
  1b. _(Optional)_ If a new SQL query is added in step 1a, register the query in `src/queries/index.js`.   
  2\. Add a controller for the feature in the corresponding package. If no package exists, feel free to create a new one. The controller should be named in the form of `<HTTP METHOD>_<DESCRIPTION>.js` for easy maintenance.    
  3\. Use the controller by adding a route to it in the `router` file.  
  4\. _(Recommended)_ Add a unit test for the new function in the associated test file(s).  

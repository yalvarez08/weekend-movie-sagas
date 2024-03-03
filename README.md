# Movies Gallery


## Description

This is a movie management app. It's a relatively simple app that displays a collection of movie images/posters and details that correspond with each movie. On the home page, the user if shown the collection of movies. Upon clicking a movie poster, the user is taken to a details page which explains more about the movie, such as title, image, description, and the movie's genre(s).

## Screen shot
Home page / movie list.


Details page of a selected movie.



## Installation
To get this application up and functionally working, follow these steps:

1. Git clone this project to your computer and open in editor of your choice (i.e. VS Code).
2. The database for this project was built using PostgreSQL. Open database app (i.e., Postico) to run the provided queries. Create a new database in your localhost. Name the database 'saga_movies_weekend'.
3. Copy all query found in the database.sql file and paste it into your 'saga_movies_weekend' database in order to populate all required information for the table data.
4. In terminal, run `npm install` to install all dependencies.
5. To start backend server, run this command in terminal:
```shell
`npm run server`
```
6. In another terminal window, run this to start the frontend vite server:
```shell
`npm run client` 
```
7. Get localhost url provided in vite server terminal and open it in a new browser tab.

## Built With

- React
- Redux-Saga
- Axios
- Postgres
- Node.js

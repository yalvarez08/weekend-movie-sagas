# Movies Gallery


## Description

This is a movie management app. It's a relatively simple app that displays a collection of movie images/posters and details that correspond with each movie. On the home page, the user is shown the collection of movies. Upon clicking a movie poster, the user is taken to a details page which explains more about the movie, such as title, image, description, and the movie's genre(s). By clicking the `Back to movie list` button, the user is taken back to the home page.

## Screen shot
Home page / movie list.
<img width="1392" alt="Screenshot 2024-03-03 at 7 38 48 PM" src="https://github.com/yalvarez08/weekend-movie-sagas/assets/145588787/a3ad75fa-8389-4516-8a59-ebdf9682d52d">


Details page of a selected movie.
<img width="1392" alt="Screenshot 2024-03-03 at 7 39 05 PM" src="https://github.com/yalvarez08/weekend-movie-sagas/assets/145588787/3b2cca00-fdd5-444f-be2f-441a8fb8541a">



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

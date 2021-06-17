# Portfolio Website

This project is a personal portfolio, created and developed using **MERN** Stack (ReactJS, NodeJS, ExpressJS & MongoDB), with **MVC** as the design pattern.

## Description

The user navigates through the pages to explore projects, to contact the website's owner, or to get to know him/her better in the _about me_ section.

A _skills_ section was included for the user to add, delete or search for a skill. This section was created only for the purpose of integrating **MongoDB** in this project.

## Technologies

- **React JS** is used to create the front end, with the help of **JQuery** to make interactive animations. In addition, **axios** helped made HTTP requests from **Node JS**.

- **Node** and **Express** for creating the back end. Database data was fetched and displayed using Express. Plus, **nodemailer** was used to send emails.

## To Use Template

- Run `yarn install` or `npm install` to install the dependencies.
- Run `cd react-app; yarn start` or `cd react-app; npm start` to start front end development server.
- Run `cd backend; yarn start` or `cd backend; npm start` to start back end development server.
- Run `yarn build` to build the app for production to the `build` folder.

## Structure

```
|-- backend,
    |-- controllers,
    |-- models,
    |-- routes,

|-- react-app,
    |-- public,
        |-- ressources,
    |-- src,
        |-- assets,
        |-- components,

```

- `/backend` contains all the backend
- `/backend/controllers` for MVC controlers
- `/backend/models` for MVC models
- `/backend/routes` for express routes
- `/react-app` contains all the frontend
- `/react-app/public` for public files
- `/react-app/public/ressources` for used ressources
- `/react-app/src` for all source files
- `/react-app/src/assets` for assets files (fonts, .png, .svg.. )
- `/react-app/src/components` contains a folder of each component with `.ts` and `.css` files.

## Demo

Comming soon..

**Note: The projects has minor bugs that are getting fixed and published soon.**

# kb-ecommerce-backend
[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)

## Description 
This is a back end for an e-commerce site. This application uses Express.js API and Sequelize to interact with a MySQL database.

Walkthrough: https://drive.google.com/file/d/1bM1ZFpGepcEWFEpSApwHEHcwxEzfRgNg/view?usp=sharing

## Table of Contents
* [Installation](#installation)
* [License](#license)

## Installation 

* Dependencies/Packages
    - Node.js
    - Express.js
    - MySQL2
    - Sequelize
    - dotenv

* Git clone the repo from Github

* Navigate to the root folder and run `npm i` or `npm install` in your terminal/command line.

* Create a .env file and make sure to include your MySQL user/password information in the .env file.

* Database Connection
    - `mysql -u root -p`
    - `source db/schema.sql`
    - `npm run seed` [To seed the file]

* Run the app
     - `npm server.js` [To start the server] and navigate to <http://localhost:3002/> in your browser OR Use Insomnia Core

## License 
This project is licensed under ISC

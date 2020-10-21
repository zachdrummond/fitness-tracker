# fitness-tracker

## Table of Contents
* [Description](#Description)
* [Links](#Links)
* [Design Elements](#Design-Elements)
* [App Preview](#App-Preview)
* [Credits](#Credits)

## Description
This is an app that tracks all of your workout needs in one place. You can create new workout plans, continue existing workout plans, add/update/delete exercises within workout plans, and even view statistics on your workout plans. This app will enable you to spend more of your time on reaching your fitness goals and less of your time on spreadsheets.

## Links
* Website: 
* GitHub Repository: https://github.com/zachdrummond/fitness-tracker

## Design Elements
### *JavaScript - Node.js*
* Node Package Manager - Express, Express-Handlebars, MySQL
* Model View Controller Architecture
* Object Relational Mapper
* Routing
* Middleware Functions
* View Engine Template
* Server-Side Rendering
* JSON
* Modules
* Promises
* DOM Manipulation
* AJAX
* Event Listeners
* Objects
* Methods
* Functions
* PORTs & Environment Variables
* If...else statements
* Comments

## App Preview
![1](./public/assets/img/.png)
![2](./public/assets/img/.png)

## Credits
* https://nodejs.org/en/
* https://www.npmjs.com/
* https://www.npmjs.com/package/nodemon
* https://www.npmjs.com/package/mysql
* https://www.mysql.com/
* http://expressjs.com/
* https://getbootstrap.com/
* https://jquery.com/
* https://www.heroku.com/



# Unit 17 Nosql Homework: Workout Tracker

For this assignment, you'll create a workout tracker. You have already been provided with the front end code in the `Develop` folder. This assignment will require you to create Mongo database with a Mongoose schema and handle routes with Express.

## User Story

* As a user, I want to be able to view create and track daily workouts. I want to be able to log multiple exercises in a workout on a given day. I should also be able to track the name, type, weight, sets, reps, and duration of exercise. If the exercise is a cardio exercise, I should be able to track my distance traveled.

## Business Context

A consumer will reach their fitness goals more quickly when they track their workout progress.

## Acceptance Criteria

When the user loads the page, they should be given the option to create a new workout or continue with their last workout.

The user should be able to:

  * Add exercises to a previous workout plan.

  * Add new exercises to a new workout plan.

  * View the combined weight of multiple exercises on the `stats` page.
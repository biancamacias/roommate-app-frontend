# Roommate App Frontend

This is the frontend code for the roommate appp hosted at https://github.com/juliawnyu/roommate-app.

## To Get Started

* Make sure you have Node.js installed

## Specs

This repository will host frontend code which will include the following:
* Use React.js for dynamic frontend content
* Testing using React.js default testing envrionment with Jest
* Utilize the HTML pages already created in our [backend repository](https://github.com/juliawnyu/roommate-app).
* Use our API server to dynamically call quiz endpoints
    * Shifting away from hard-coded quiz elements that we had in the previous semester

## User Journey

This frontend will navigate a user through the following:
* Home page, with **Register** and **Login** options
* **Register** or **Login** page which calls the backend to either add a user or sign a user in

If a user is registering, after they are registered in the system, the following will happen:
* User will answer a quiz, which calls our backend to populate dynamically the questions
* User will answer the quiz, and these quiz answers will be stored in the database
* User will be shown a dashboard and see results for other students who they might be a match with as a roommate

If a user is loggin in, the following will happen:
* User will be shown a dashbaord and see results for other students who they might be a match with as a roommate
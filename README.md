This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Table of contents:
- **[Getting Started](#getting-started)**
- **[Goal for this project](#goal-for-this-project)**
- **[Test POST and GET Route with JSON server](#test-post-and-get-route-with-json-server)**
- **[Technologies used](#technologies-used)**
- **[File setup](#file-setup)**


### Getting Started

* Installing dependencies: npm install (command line)
* In terminal run app with: npm run start

#### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### Goal for this project

Build a form with validation and auto-completion (by entering a dutch ZIPcode it will complete the street and city input) with use of an API: https://photon.komoot.de
The data that is entered will be written to JSON server. See instructions below:

#### Test POST and GET Route with JSON server

* instal JSON server: npm install -g json-server
* run JSON server with following command: json-server --port 4000 db.json
* to see results go to: http://localhost:4000/info
* check db.json file 

### Technologies used

* Node.js
* npm
* React
* Redux
* superagent
* JSON server
* CSS Flexbox


### File set up

- **[index](./src/index.js)**
The root render App component wrapped in BrowserRouter
- **[App](./src/App.js)**
App.js render Routes wrapped in Provider which gives access to the redux store 
- **[store](./src/store.js)**
The store lives in here
- **[reducers](./src/reducers/index.js)**
Combine reducers defines how the state of the store changes when an action is dispatched
- **[actions](./src/actions.js)**
Actions to send data from your application to your store with A GET and POST request to test with JSON server
- **[db](./db.json)**
JSON server file
- **[css](./index.css)**
Styling components


##### Components
- **[FormContainer](./src/index.js)**
Container for the FormDetails, defines local state and functions and passes this to the FormDetails component
- **[FormDetails](./src/App.js)**
Displays the Form
- **[Info](./src/store.js)**
Displays info to the screen



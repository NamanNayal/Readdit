1. set up vite project
2. Creating pages and components 
3. Setting up react-router-dom (BrowserRouter, Routes, Route)

User visits /users → React Router renders Users.jsx.

Users.jsx makes an API request to /api/users.

Express backend handles logic, retrieves data from MongoDB, and responds.

Users.jsx receives data and updates the UI.

4.taking care of layout in app.jsx using daisyui

5.CREATING THE SERVER
  - create a paackage.json in the root folder, and a api folder for backend, install nodemon for automatically restart the server, make changes in package.json like changing type from commonjs to module, to use ES modules, and add scripts for dev and start for starting the server
  - create index.js, a starting point for our backend

6. Connect to the db
 - npm install mongoose in root, create a mongodb cluster, mongoose for smooth interation btw nodejs and mongodb, set up a .env and include it in gitignore, .env for URI.
 -npm i dontenv for a zero-dependency module to load environment variables from a .env file into process.env. 
 - we connect our backend with database

7. Create User Model
 -Import Mongoose: Load the Mongoose ODM library to interface with MongoDB.
 -Define Schema: Specify the structure and validation rules for user data (e.g., username, email, password with types and constraints).
 -Enable Timestamps: Automatically manage createdAt and updatedAt fields for each document.
 -Create Model: Compile schema into a model to interact with MongoDB (perform CRUD operations).
 -Export Model: Make the model accessible across the app for database interaction. 

8. create test api
 -Client requests GET /api/user/test.
 -Express routes it to user.route.js, which matches /test.
 -Controller handles the request, sending { message: "API is working!" }.

 -Best Practice - handle routes in seperate folder, and logic in seperate folder, while index.js keeps server configuration separate from business logic.


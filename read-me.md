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
  


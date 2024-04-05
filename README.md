Full-Stack Form
This project is a full-stack application built with Node.js/Express.js for the backend and React.js for the frontend, using a PostgreSQL database. The objective of the project is to resolve bugs to make the application work end-to-end.

Table of Contents
Backend Setup
Frontend Setup
Issues to Resolve
Bonus
Resources
Backend Setup
PostgreSQL Database Setup:

Install PostgreSQL: Follow the instructions here to install PostgreSQL on your system.
Create necessary tables with columns as per the provided queries.js file.
Environment Variables:

Create a .env file based on the provided .env.example.
Configure the .env file to securely access environment variables for the database connection.
API Fixes:

Thoroughly test and fix the APIs in the queries.js file to ensure proper interaction with the database.
Handle errors appropriately and return meaningful responses to the client.
Frontend Setup
State Management:

Ensure correct management of the application's state to properly store and access data.
Ensure the user list on the table is always visible and accurately reflects the data from the backend.
Error Handling:

Display an alert with error messages if something goes wrong on the backend, providing clear feedback to the user.
Issues to Resolve
Resolve backend bugs related to database queries, API endpoints, and error handling.
Resolve frontend issues related to state management, data visibility, and error handling.
Bonus
Implement measures to prevent the application from crashing and enable automatic restart if it does.

Resources
PostgreSQL Node.js Library: Documentation for using PostgreSQL with Node.js.
Dotenv Node.js Library: Documentation for using environment variables in Node.js applications.






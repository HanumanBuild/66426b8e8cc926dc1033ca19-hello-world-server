// Import the Express module
const express = require('express');

// Create an instance of an Express application
const app = express();

// Define the port number
const PORT = 3000;

// Set up a route to respond with 'Hello World' to GET requests at the root URL ('/')
app.get('/', (req, res) => {
    res.send('Hello World');
});

// Start the server and listen on the specified port
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
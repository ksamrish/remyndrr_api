const express = require('express');
const app = express();
const PORT = 3000;

// Middleware to parse JSON data
app.use(express.json());

// Basic route
app.get('/', (req, res) => {
    res.json('Welcome to the Express API!');
});

// Example route for API
app.get('/api/example', (req, res) => {
    res.json({ message: 'Hello from the example endpoint!' });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

module.exports = app;
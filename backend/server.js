// Load environment variables
require("dotenv").config();

const app = require("./app");
const connectDB = require("./config/db");

connectDB();

const PORT = process.env.PORT || 5000;
const HOST = '0.0.0.0'; // Bind to all interfaces for Render

app.listen(PORT, HOST, () => {
    console.log(`Server running on port ${PORT}`);
    console.log(`Environment: ${process.env.NODE_ENV || 'development'}`);
});
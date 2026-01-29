const express = require("express");
const cors = require("cors");

const app = express();

// Configure CORS for production and development
const corsOptions = {
    origin: function (origin, callback) {
        // Allow requests with no origin (like mobile apps or curl)
        if (!origin) return callback(null, true);

        const allowedOrigins = [
            'http://localhost:5173',
            'http://localhost:5174',
            'http://localhost:3000'
        ];

        // In production, add your Vercel domain
        if (process.env.NODE_ENV === 'production') {
            // Add your actual Vercel domain here after deployment
            // allowedOrigins.push('https://your-app.vercel.app');
        }

        // Allow all origins in development, specific origins in production
        if (process.env.NODE_ENV !== 'production' || allowedOrigins.indexOf(origin) !== -1) {
            callback(null, true);
        } else {
            callback(new Error('Not allowed by CORS'));
        }
    },
    credentials: true
};

app.use(cors(corsOptions));
app.use(express.json());

app.use("/api/insights", require("./routes/insight.routes"));

module.exports = app;

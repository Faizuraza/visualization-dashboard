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
            'http://localhost:3000',
            'https://visualization-dashboard-ev76y.vercel.app' // Vercel frontend
        ];

        // Allow all Vercel preview deployments
        if (origin && origin.includes('vercel.app')) {
            return callback(null, true);
        }

        // Allow specific origins
        if (allowedOrigins.indexOf(origin) !== -1) {
            callback(null, true);
        } else {
            callback(new Error('Not allowed by CORS'));
        }
    },
    credentials: true
};

app.use(cors(corsOptions));
app.use(express.json());

// Root route for testing
app.get("/", (req, res) => {
    res.json({ message: "Backend is running", routes: ["/api/insights", "/api/insights/filters"] });
});

app.use("/api/insights", require("./routes/insight.routes"));

module.exports = app;

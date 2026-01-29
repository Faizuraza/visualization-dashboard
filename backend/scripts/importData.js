const mongoose = require("mongoose");
const fs = require("fs");
const path = require("path");
require("dotenv").config();

const Insight = require("../models/Insight.model");

const importData = async () => {
    try {
        // Connect to MongoDB
        await mongoose.connect(process.env.MONGO_URI);
        console.log("MongoDB Connected");

        // Read JSON file
        const dataPath = path.join(__dirname, "../jsondata.json");
        const jsonData = JSON.parse(fs.readFileSync(dataPath, "utf-8"));

        // Clear existing data
        await Insight.deleteMany({});
        console.log("Existing data cleared");

        // Insert new data
        await Insight.insertMany(jsonData);
        console.log(`${jsonData.length} insights imported successfully`);

        process.exit(0);
    } catch (error) {
        console.error("Error importing data:", error.message);
        process.exit(1);
    }
};

importData();

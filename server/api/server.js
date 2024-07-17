const express = require("express");
const cors = require("cors"); // Import the cors package
require("dotenv").config();
const dbConfig = require('./config/dbConfig');
const portfolioRoute = require("./routes/portfolioRoute");

const app = express();
const port = process.env.PORT || 5000;

// Use CORS to allow requests from your frontend domain
app.use(cors({
  origin: 'http://localhost:3000', // Change this to specific domains if needed
  credentials: true,
}));

app.use(express.json());
app.use("/api/portfolio", portfolioRoute);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

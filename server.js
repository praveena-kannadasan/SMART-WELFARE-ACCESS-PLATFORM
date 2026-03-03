console.log("Server file loaded");

const express = require("express");
const cors = require("cors");

const eligibilityRoutes = require("./routes/eligibility");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api", eligibilityRoutes);

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
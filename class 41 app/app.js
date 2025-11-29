const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");

require("dotenv").config()

const app = express();

app.use(express.json())
app.use(cors())

connectDB();

app.use("/user", require("./routes/authRoutes"))
app.use("/bookings", require("./routes/bookingRoutes"));

const PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log("Server is running at the port 5004")
})
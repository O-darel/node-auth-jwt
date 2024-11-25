//import libraries
const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const path = require("path");

//auth routes
const authRoutes=require("./routes/authRoutes")

dotenv.config();

//initialize  express app
const app = express();

//add middleware
app.use(cors());
app.use(bodyParser.json()); // Parse JSON request bodies
app.use(bodyParser.urlencoded({ extended: true }));// Parse URL-encoded request bodies
app.use(express.static(path.join(__dirname, "public")));//static files

//set view engine
app.set("view engine", "ejs");

//start server
app.listen(process.env.PORT || 3000, () => {
    console.log("Server running")
});

//routes
app.get("/", (req, res) => {
    res.render("base", {
        title: "Home",
        contentFile: "index"
    })
});

app.use(authRoutes)


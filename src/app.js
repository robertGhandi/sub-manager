require("dotenv").config();
const authRoutes = require("./routes/auth.routes");
const express = require("express");
const app = express();
const cors = require("cors");

const path = require("path");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use("https://sub-manager.netlify.app/.netlify/functions/app", authRoutes);
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
	res.sendFile(path.join(__dirname, "public", "landing-page", "index.html"));
});

app.get("/dashboard", (req, res) => {
	res.sendFile(path.join(__dirname, "public", "dashboard", "dashboard.html"));
});

app.get("/reset-password", (req, res) => {
	res.sendFile(
		path.join(__dirname, "public", "resetPassword", "resetPassword.html")
	);
});

module.exports = app;
